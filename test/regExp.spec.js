// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.regExp', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(/abc/);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.regExp());
  });
});
