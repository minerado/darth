const removeIn = (map, keys) => {
  const [first_keys, last_key] = [keys.slice(0, -1), keys.slice(-1)]

  const _map = Object.assign({}, map)

  delete first_keys.reduce((acc, key) => acc[key], _map)[last_key]

  return _map
}

module.exports = removeIn
