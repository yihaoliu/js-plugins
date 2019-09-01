const sum = require('../src/utils/sum.js');
const add = require('../src/utils/add.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('乘法 11 * 2 =22', () => {
  expect(add(11, 2)).toBe(22);
});