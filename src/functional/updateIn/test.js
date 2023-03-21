const updateIn = require('./')

test('updateIn', () => {
  expect(updateIn({ a: { b: { c: 1 } } }, ['a', 'b', 'c'], () => 10)).toEqual({
    a: { b: { c: 10 } },
  })

  expect(updateIn({ a: { b: { c: 1 } } }, ['a', 'b'], () => 10)).toEqual({
    a: { b: 10 },
  })

  expect(updateIn({ a: { b: { c1: 1, c2: 2 } } }, ['a', 'b', 'c2'], (val) => val * 10)).toEqual({
    a: { b: { c1: 1, c2: 20 } },
  })

  expect(
    updateIn({ a: { b: { c1: 1, c2: 2 } } }, ['a'], ({ b, ...val }) => ({
      ...val,
      b1: b,
      b2: 2,
    })),
  ).toEqual({
    a: { b1: { c1: 1, c2: 2 }, b2: 2 },
  })

  expect(() => updateIn({ a: { b: { c1: 1, c2: 2 } } }, ['a'])).toThrow()
})
