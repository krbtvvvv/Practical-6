const { calculateDiscount } = require('./calculator');

test('calculates discount correctly', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});

test('calculates discount with zero discount', () => {
  expect(calculateDiscount(100, 0)).toBe(100);
});
