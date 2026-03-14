const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// Tests for Addition (+)
describe('add', () => {
  test('adds two positive numbers', () => expect(add(2, 3)).toBe(5));
  test('adds a positive and negative number', () => expect(add(10, -4)).toBe(6));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
});

// Tests for Subtraction (-)
describe('subtract', () => {
  test('subtracts two positive numbers', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts resulting in a negative number', () => expect(subtract(3, 9)).toBe(-6));
  test('subtracts zero', () => expect(subtract(5, 0)).toBe(5));
});

// Tests for Multiplication (×)
describe('multiply', () => {
  test('multiplies two positive numbers', () => expect(multiply(45, 2)).toBe(90));
  test('multiplies by zero', () => expect(multiply(7, 0)).toBe(0));
  test('multiplies two negative numbers', () => expect(multiply(-3, -4)).toBe(12));
});

// Tests for Division (÷)
describe('divide', () => {
  test('divides two positive numbers', () => expect(divide(20, 5)).toBe(4));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBe(3.5));
  test('throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});

// Tests for Modulo (%)
describe('modulo', () => {
  test('returns remainder of 5 % 2', () => expect(modulo(5, 2)).toBe(1));
  test('returns 0 when evenly divisible', () => expect(modulo(10, 5)).toBe(0));
  test('returns correct remainder for larger numbers', () => expect(modulo(17, 3)).toBe(2));
});

// Tests for Exponentiation / Power (^)
describe('power', () => {
  test('raises 2 to the power of 3', () => expect(power(2, 3)).toBe(8));
  test('raises a number to the power of 0', () => expect(power(5, 0)).toBe(1));
  test('raises a number to the power of 1', () => expect(power(7, 1)).toBe(7));
  test('raises 2 to the power of 8', () => expect(power(2, 8)).toBe(256));
});

// Tests for Square Root (√)
describe('squareRoot', () => {
  test('returns square root of 16', () => expect(squareRoot(16)).toBe(4));
  test('returns square root of 144', () => expect(squareRoot(144)).toBe(12));
  test('returns square root of 0', () => expect(squareRoot(0)).toBe(0));
  test('returns square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });
  test('throws on square root of a negative number', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot take square root of a negative number');
  });
});
