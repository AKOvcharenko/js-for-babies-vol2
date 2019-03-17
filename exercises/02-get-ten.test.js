const getTen = require('./02-get-ten');

describe('getTen', () => {
  it('should be defined', () => {
    expect(getTen).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof getTen).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof getTen()).toBe('number');
  });

  it('should returns 10', () => {
    expect(getTen()).toEqual(10);
  });
});
