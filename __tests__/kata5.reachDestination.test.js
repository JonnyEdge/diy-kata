const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(49,10)).toBe("5.0")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(48,10)).toBe("5.0")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(47,10)).toBe("4.5")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(46,10)).toBe("4.5")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(45,10)).toBe("4.5")
  });
  
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44,10)).toBe("4.5")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(43,10)).toBe("4.5")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(42,10)).toBe("4.0")
  });

  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(41,10)).toBe("4.0")
  });
});
