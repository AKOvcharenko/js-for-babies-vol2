const uniqueOnly = require('./01-uniqueOnly');

describe('uniqueOnly', () => {
  it('should be defined', () => {
    expect(uniqueOnly).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof uniqueOnly).toBe('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(uniqueOnly([]))).toBe(true);
  });

  it('should returns proper array', () => {
    expect(uniqueOnly([1, 2, 4, 2, 5, 2, 4, 3, 6])).toEqual([1, 2, 4, 5, 3, 6]);
  });

  it('empty case', () => {
    expect(uniqueOnly([])).toEqual([]);
  });

});
