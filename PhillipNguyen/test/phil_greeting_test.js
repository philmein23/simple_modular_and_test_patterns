const chai = require('chai');
const expect = chai.expect;
const phil = require(__dirname + '/../lib/phil_greeting');

describe('phil', () => {
  it('should return a greeting string',  () => {
    expect(phil('Phil')).to.eql('Hello Phil');
  });
});
