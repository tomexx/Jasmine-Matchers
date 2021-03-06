// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfStrings', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(['', ' ', new String('hello')]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfStrings());
  });
});
