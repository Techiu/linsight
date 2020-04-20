/*
 * @Description:
 * @Date: 2020-04-20 10:30:05
 * @LastEditTime: 2020-04-20 10:36:42
 */
test('test common mather', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 3).not.toBe(4)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('test object', () => {
  expect({ name: 'chiuvenz' }).toEqual({ name: 'chiuvenz' })
})
