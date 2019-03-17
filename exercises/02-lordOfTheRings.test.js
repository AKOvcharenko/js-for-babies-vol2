const lordOfTheRings = require('./03-lordOfTheRings');

describe('lordOfTheRings', () => {
  it('should be defined', () => {
    expect(lordOfTheRings).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof lordOfTheRings).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof lordOfTheRings()).toBe('number');
  });

  it('should returns proper number', () => {
    expect(lordOfTheRings('One Does Not Simply Walk into Mordor')).toEqual(12);
  });

  it('should returns proper number empty string case', () => {
    expect(lordOfTheRings('')).toEqual(0);
  });
});
