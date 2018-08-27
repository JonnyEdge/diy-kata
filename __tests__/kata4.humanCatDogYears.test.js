const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns an array containing cat and dog age calculations from a given human age of 1', () => {
      expect(humanCatDogYears(1)).toEqual([ 1, 15, 15 ])
    });

    it('returns an array containing cat and dog age calculations from a given human age of 2', () => {
      expect(humanCatDogYears(2)).toEqual([ 2, 24, 24 ])
    });

    it('returns an array containing cat and dog age calculations from a given human age of 10', () => {
        expect(humanCatDogYears(10)).toEqual([ 10, 56, 64 ])
    });
  });
