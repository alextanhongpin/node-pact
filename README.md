# node-pact

Pact Testing with nodejs.


## Generate pact contract

Run consumer side tests and create pact:

```bash
$ ./node_modules/.bin/mocha client/client.spec.js
```

It should generate `client/pacts/client-productservice.json`. Output:

```json
{
  "consumer": {
    "name": "client"
  },
  "provider": {
    "name": "ProductService"
  },
  "interactions": [
    {
      "description": "a request to retrieve product list",
      "providerState": "it has one product",
      "request": {
        "method": "GET",
        "path": "/products"
      },
      "response": {
        "status": 200,
        "headers": {
        },
        "body": [
          {
            "name": "Foo"
          }
        ]
      }
    }
  ],
  "metadata": {
    "pactSpecification": {
      "version": "2.0.0"
    }
  }
}
```

## Start Pact Broker

There is a dockerized version of the Pact Broker. See `docker-compose.yml`:

```yml
version: '3'

services:
  postgres:
    image: postgres
    healthcheck:
      test: psql postgres --command 'select 1'
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: postgres
    
  broker_app:
    image: dius/pact-broker
    ports:
    - 80:80
    links:
    - postgres
    environment:
      PACT_BROKER_DATABASE_USERNAME: postgres
      PACT_BROKER_DATABASE_PASSWORD: password
      PACT_BROKER_DATABASE_HOST: postgres
      PACT_BROKER_DATABASE_NAME: postgres
```

Start the Pact Broker:

```bash
$ docker-compose up -d
```

## Publish Pact

Publish all your contracts to the Pact Broker server with the following commands:

```bash
$ ./publish-pact.sh
```

This requires `jq`. If you do not have `jq` installed:

```
$ brew install jq
```

## Verify pacts against the provider

```bash
# Start the server
$ node server/consumer-test/test-products-service.js

# Execute the test
$ node server/consumer-test/verify-pacts.js
```