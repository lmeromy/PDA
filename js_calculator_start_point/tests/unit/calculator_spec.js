var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 + 4 to get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can multiply 3 by 5 and get 15', function(){
   calculator.previousTotal = 3;
   calculator.multiply(5);
   assert.strictEqual(calculator.runningTotal, 15);
  })


  it('can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.previousTotal = 10;
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can chain multiple operations together', function(){
    calculator.runningTotal = 10;
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 18);
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 3;
    calculator.operatorClick('*');
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 6);
  })

});
