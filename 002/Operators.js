'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('[\n ]+'));
  main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
  // Write your code here
  var cost = parseFloat(mealCost) || parseFloat(12)  ;
  var tipPerce = parseInt(tipPercent) || parseInt(20) ;
  var taxPerce =  parseInt(taxPercent) || parseInt(8) ;

  var tipTotal = (cost * tipPerce) / 100;
  var taxTotal = (cost * taxPerce) / 100;

  var totalCost = Math.round(cost + tipTotal + taxTotal);
  // Use console.log() to print to stdout
  console.log(`The total meal cost is ${totalCost} dollars.`);
}
