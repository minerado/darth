const removeIn = (map, keys) => {
  const _map = { ...map }

  let current = _map

  const len = keys.length - 1

  for (let i = 0; i < len; i++) {
    current = current[keys[i]]
  }

  delete current[keys[len]]

  return _map
}

module.exports = removeIn
