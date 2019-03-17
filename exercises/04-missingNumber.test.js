const missingNumber = require('./04-missingNumber');

describe('missingNumber', () => {
  it('should be defined', () => {
    expect(missingNumber).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof missingNumber).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof missingNumber([1])).toBe('number');
  });

  it('should returns proper number', () => {
    expect(missingNumber([1, 3, 4])).toEqual(2);
  });

  it('should returns proper number max missed case', () => {
    expect(missingNumber([1, 2, 3])).toEqual(4);
  });
});
