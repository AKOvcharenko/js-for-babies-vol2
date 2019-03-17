const stack = require('./05-stack');

describe('missingNumber', () => {
  it('should be defined', () => {
    expect(stack).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof stack).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof stack([(arg) => arg + 1 ], 0)).toBe('number');
  });

  it('should returns proper number easy case', () => {
    expect(stack([(arg) => arg + 1 ], 0)).toBe(1);
  });

  it('should returns proper number max case', () => {
    expect(stack([
      (arg) => { return arg + 1;},
      (arg) => { return arg + 2;},
      (arg) => { return arg + 3;},
      (arg) => { return arg + 4;},
    ], 0)).toEqual(10);
  });
});
