const getIn = require('./')

test('getIn', () => {
  expect(getIn({ a: { b: { c: 1 } } }, ['a', 'b', 'c'])).toBe(1)
  expect(getIn({ a: { b: { c: 1 } } }, ['a', 'b'])).toEqual({ c: 1 })
  expect(getIn({ a: { b: { c: 1 } } }, ['a', 'b', 'd'])).toBe(undefined)
  expect(getIn({ a: { b: { c: 1 } } }, [])).toBe(undefined)
  expect(getIn({ a: { b: { c: 1 } } }, ['a', 'a2', 'a3'])).toBe(undefined)
  expect(getIn({ a: 1 }, ['a', 'b', 'c'])).toBe(undefined)
  expect(getIn({}, ['a', 'b', 'c'])).toBe(undefined)
  expect(getIn({}, [])).toBe(undefined)
})
