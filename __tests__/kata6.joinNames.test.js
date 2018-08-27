const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {

    const bart = {
      name: 'Bart'
    };

    const lisa = {
      name: 'Lisa'
    };


    const maggie = {
      name: 'Maggie'
    };

    expect(joinNames([bart, lisa, maggie])).toBe('Bart, Lisa & Maggie')
  });

  it('returns string of names, seperated by commas and an ampersand', () => {
    const homer = {
      name: 'Homer'
    }

    const marge = {
      name: 'Marge'
    }
    
    const bart = {
      name: 'Bart'
    };

    const lisa = {
      name: 'Lisa'
    };


    const maggie = {
      name: 'Maggie'
    };

    expect(joinNames([homer, marge, bart, lisa, maggie])).toBe('Homer, Marge, Bart, Lisa & Maggie')
  });
});
