const data = new Map()

function getAll () {
  return [...data.values()]
}

function create (product) {
  const id = Math.max(...data.keys(), 0) + 1
  data.set(id, Object.assign(product, { id }))
  return data.get(id)
}

module.exports = {
  getAll,
  create
}
