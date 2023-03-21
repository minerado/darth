const range = (start, stop, step = 1) => {
  const [_start, _stop] = stop === undefined ? [0, start] : [start, stop]

  const length = Math.ceil(Math.abs(_stop - _start) / Math.abs(step))

  return Array.from({ length }, (_, i) => _start + i * step)
}

module.exports = {
  range,
}
