const { numberToReversedDigits } = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the 196\'s digits', () => {
    expect(numberToReversedDigits(196)).toEqual([ 6, 9, 1 ])
  });
  
  it('returns a reversed array of the 1992\'s digits', () => {
    expect(numberToReversedDigits(1992)).toEqual([ 2, 9, 9, 1 ])
  });

  it('returns a reversed array of the 1992\'s digits', () => {
    expect(numberToReversedDigits(678543671)).toEqual([ 1, 7, 6, 3, 4, 5, 8, 7, 6 ])
  });

  it('returns a reversed array of the 1992\'s digits', () => {
    expect(numberToReversedDigits(147852369)).toEqual([ 9, 6, 3, 2, 5, 8, 7, 4, 1 ])
  });

  it('returns a reversed array of the 1992\'s digits', () => {
    expect(numberToReversedDigits(789456123)).toEqual([ 3, 2, 1, 6, 5, 4, 9, 8, 7 ])
  });

  it('returns a reversed array of the 1992\'s digits', () => {
    expect(numberToReversedDigits(9517534286)).toEqual([ 6, 8, 2, 4, 3, 5, 7, 1, 5, 9 ])
  });
});
