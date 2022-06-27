module.exports = function toReadable(number) {
// function toReadable(number) {
    let total;
    let preTotal;
    let arrOfNumbers;
    let firstNumber;
    let secondNumber;

    if (number === 0) {

        total = 'zero';
    }

    else if (number >= 1 && number <= 9) {

        total = isunitsHundreds(number);
    
    }   else if ( number >= 10 && number <= 19 ) {

        total = isteens(number);

    } else if ( number >= 20 && number <= 99 ) {

      arrOfNumbers = String(number).split('');
      firstNumber = Number(arrOfNumbers[0]);
      secondNumber = Number(arrOfNumbers[1]);

      preTotal = isdozen(firstNumber) + " " + isunitsHundreds(secondNumber);
      total = preTotal.trim();

    } else if ( number >= 100 && number <= 999 ) {

      arrOfNumbers = String(number).split('');
      firstNumber = Number(arrOfNumbers[0]);
      secondNumber = Number(arrOfNumbers[1]);
      let thirdNumber = Number(arrOfNumbers[2]);
      let secondNumberForTrim = isdozen(secondNumber);
      let dozen = Number(arrOfNumbers[1] + arrOfNumbers[2]);
      // console.log(dozen);

      if ( secondNumber === 0 ) {

        preTotal = isunitsHundreds(firstNumber) + " hundred" + " " + isdozen(secondNumber) + isunitsHundreds(thirdNumber);

        total = preTotal.trim();

      } else if ( secondNumber === 1 ) {

        preTotal = isunitsHundreds(firstNumber) + " hundred" + " " + isteens(dozen);

        total = preTotal.trim();

      } else {

        preTotal = isunitsHundreds(firstNumber).trim() + " hundred" + " " + secondNumberForTrim.trim() + " " + isunitsHundreds(thirdNumber).trim();
        total = preTotal.trim();
      }

} 

console.log(total);
return total;
}

let unitsHundreds;
let teens;
let dozen;

function isunitsHundreds(num1) {
    switch (num1) {

        case 0:
            unitsHundreds = '';
          break;
        case 1:
            unitsHundreds = 'one';
          break;
          case 2:
            unitsHundreds = 'two';
          break;
          case 3:
            unitsHundreds = 'three';
          break;
          case 4:
            unitsHundreds = 'four';
          break;
          case 5:
            unitsHundreds = 'five';
          break;
          case 6:
            unitsHundreds = 'six';
          break;
          case 7:
            unitsHundreds = 'seven';
          break;
          case 8:
            unitsHundreds = 'eight';
          break;
          case 9:
            unitsHundreds = 'nine';
          break;
}

// console.log(unitsHundreds);
return unitsHundreds;
}

function isteens(num1) {
    switch (num1) {
        case 10:
            teens = 'ten';
          break;
          case 11:
            teens = 'eleven';
          break;
          case 12:
            teens = 'twelve';
          break;
          case 13:
            teens = 'thirteen';
          break;
          case 14:
            teens = 'fourteen';
          break;
          case 15:
            teens = 'fifteen';
          break;
          case 16:
            teens = 'sixteen';
          break;
          case 17:
            teens = 'seventeen';
          break;
          case 18:
            teens = 'eighteen';
          break;
          case 19:
            teens = 'nineteen';
          break;
}

return teens;
}

function isdozen(num2) {
    switch (num2) {
          case 0:
            dozen = '';
          break;
          case 2:
            dozen = 'twenty';
          break;
          case 3:
            dozen = 'thirty';
          break;
          case 4:
            dozen = 'forty';
          break;
          case 5:
            dozen = 'fifty';
          break;
          case 6:
            dozen = 'sixty';
          break;
          case 7:
            dozen = 'seventy';
          break;
          case 8:
            dozen = 'eighty';
          break;    
          case 9:
            dozen = 'ninety';
          break;
    } 
return dozen;
}

// toReadable(214);

