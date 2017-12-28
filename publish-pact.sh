#!/usr/bin/env bash

PACT_PATH=pacts

for f in ${PACT_PATH}/*.json; do \
	consumer=$(jq '.consumer.name' $f | sed s'/"//g')
	provider=$(jq '.provider.name' $f | sed s'/"//g')
	consumer_version=$(jq '.version' package.json | sed s'/"//g') 
	curl -X PUT \-H "Content-Type: application/json" \
		-d @$f \
		http://localhost:80/pacts/provider/$provider/consumer/$consumer/version/$consumer_version
done