const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(27)).toBe('Fizz')
  });

  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(96)).toBe('Fizz')
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(125)).toBe('Buzz')
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(10750)).toBe('Buzz')
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(150)).toBe('FizzBuzz')
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(480)).toBe('FizzBuzz')
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect(fizzBuzz(16)).toBe(16)
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect(fizzBuzz(11111)).toBe(11111)
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    expect(fizzBuzz(27053)).toBe(27053)
  });
});
