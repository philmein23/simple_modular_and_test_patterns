const chai = require('chai');
const expect = chai.expect;
const Phil = require(__dirname + '/../lib/phil_greeting');

const phil = new Phil("Phil");

describe('phil', () => {
  it('should return a greeting string',  () => {
    expect(phil.greet("Phil")).to.eql('Hello Phil');
  });
});
