const removeIn = require('./')

test('removeIn', () => {
  expect(removeIn({ a: { b: { c: 1 } } }, ['a', 'b', 'c'])).toEqual({ a: { b: {} } })
  expect(removeIn({ a: { b: { c: 1 } } }, ['b'])).toEqual({ a: { b: { c: 1 } } })
})
