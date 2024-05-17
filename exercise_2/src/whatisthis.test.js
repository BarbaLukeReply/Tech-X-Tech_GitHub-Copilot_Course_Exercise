const x = require('./whatisthis');

test('whatisthis test', () => {
  // Test case 1
  expect(x(3)).toBeCloseTo(0, 5);

  // Test case 2
  expect(x(6)).toBeCloseTo(1.897366, 5);

  // Test case 3
  expect(x(2)).toBeCloseTo(-0.632455, 5);
});
