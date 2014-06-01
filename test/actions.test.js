var assert = require('assert');

var actions = require('../lib/actions.js');


describe('actions', function() {
  it('should return the right pH actions', function() {
    var actionz = actions.getActions({
      pH: 7.2,
      ORP: 850,
      CYA: 50,
      poolVolume: 10000
    });

    assert.equal(actionz.length, 2);
    assert.equal(actionz[0].material, 'soda ash');
    assert.equal(Math.round(actionz[0].amount), 120);
  });
});
