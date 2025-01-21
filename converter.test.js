const convert = require('./converter');

describe('convert function tests', () => {
  test('converts 100 INR to USD correctly', () => {
    expect(convert(100)).toBe('1.2'); // 100 / 83.0 = 1.20
  });

  test('converts 0 INR to USD', () => {
    expect(convert(0)).toBe('0.00'); // 0 / 83.0 = 0.00
  });

  test('handles negative INR values', () => {
    expect(convert(-100)).toBe('-1.20'); // -100 / 83.0 = -1.20
  });

  test('throws an error for non-numerical string input', () => {
    expect(() => convert('ten')).toThrow('Invalid amount');
  });

  test('throws an error for null input', () => {
    expect(() => convert(null)).toThrow('Invalid amount');
  });

  test('throws an error for undefined input', () => {
    expect(() => convert(undefined)).toThrow('Invalid amount');
  });

  test('throws an error for object input', () => {
    expect(() => convert({})).toThrow('Invalid amount');
  });

  test('handles decimal INR values correctly', () => {
    expect(convert(124.5)).toBe('1.50'); // 124.5 / 83.0 = 1.50
  });

  test('throws an error for NaN input', () => {
    expect(() => convert(NaN)).toThrow('Invalid amount');
  });
});
