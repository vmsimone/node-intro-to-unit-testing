// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  //normies
  it('should play fizzbuzz with an arg', function() {

    const normalCases = [
      {num: -1, expected: -1},
      {num: 0, expected: 'fizz-buzz'},
      {num: 3, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 30, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });

  });

  //extremes
  it('should throw an error if arg is NaN', function() {

    const abnormalCases = [
      'wowie',
      '3',
      true,
      undefined
    ];

    abnormalCases.forEach(input => {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
