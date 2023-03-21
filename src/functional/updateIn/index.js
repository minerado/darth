const updateIn = (map, keys, fn) => {
  const _key = [...keys].pop()
  const _map = { ...map }

  const value_map = keys.slice(0, -1).reduce((acc, key) => acc[key], _map)

  value_map[_key] = fn(value_map[_key], _map)

  return _map
}

module.exports = updateIn
