const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var badData = 123;
    var result = isRealString(badData);

    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var emptyStr = '    ';
    var result = isRealString(emptyStr);

    expect(result).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var myStr = '  teststring  ';
    var result = isRealString(myStr);

    expect(result).toBe(true);
  });
});
