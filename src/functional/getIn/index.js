const getIn = (map, [h, ...t]) => {
  const value = map[h]

  return t.length === 0 || value === undefined ? value : getIn(value, t)
}

module.exports = getIn
