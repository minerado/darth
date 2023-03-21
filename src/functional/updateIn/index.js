const updateIn = (map, keys, fn) => {
  const [first_keys, last_key] = [keys.slice(0, -1), keys.slice(-1)]

  const _map = Object.assign({}, map)

  const value_map = first_keys.reduce((acc, key) => acc[key], _map)

  value_map[last_key] = fn(value_map[last_key], _map)

  return _map
}

module.exports = updateIn
