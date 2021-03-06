// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.nonEmptyObject', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy({
      prop: 'value'
    });
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.nonEmptyObject());
  });
});
