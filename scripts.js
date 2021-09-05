function add(a, b) {return a + b;};
function subtract(a, b) {return a - b;};
function multiply(a, b) {return a * b;};
function divide(a, b) {return a / b;}

function operate(op, a, b) {
  if (op == "+") {return add(a, b);}
  else if (op == "-") {return subtract(a, b);} 
  else if (op == "x") {return multiply(a, b);}
  else if (op == "÷") {return divide(a, b);}
  else {return "Invalid operator";}
}

let num1;
let num2;

//backup nums
let bNum1;
let bNum2;
let numArr = [];

//try to get continous addition
//  messed with operators, mostly add
//  messed with twoBtn
//  created bNums

//BASIC CALCULATOR V2
let firstNum = document.querySelector('#firstNum');
let oper;
let equals = document.querySelector('#equals');

//Operators
let division = document.querySelector('#division');
let mult = document.querySelector('#multiply');
let subt = document.querySelector('#subtract');
let addBtn = document.querySelector('#add');

let operCnt = 0;

division.addEventListener('click', () => {
  oper = '÷';
  num1 = firstNum.value;
  firstNum.value = '';

  operCnt += 1;
  if (operCnt > 1) {
    num2 = firstNum.value;
    let answer = operate(oper, Number(num1), Number(num2));
  
    firstNum.value = answer;
  };
});
mult.addEventListener('click', () => {
  oper = 'x';
  num1 = firstNum.value;
  firstNum.value = '';

  operCnt += 1;
  if (operCnt > 1) {
    num2 = firstNum.value;
    let answer = operate(oper, Number(num1), Number(num2));
  
    firstNum.value = answer;
  };
});
subt.addEventListener('click', () => {
  oper = '-';
  num1 = firstNum.value;
  firstNum.value = '';

  operCnt += 1;
  if (operCnt > 1) {
    num2 = firstNum.value;
    let answer = operate(oper, Number(num1), Number(num2));
  
    firstNum.value = answer;
  };
});
addBtn.addEventListener('click', () => {
  oper = '+';
  num1 = firstNum.value;
  numArr.push(firstNum.value);
  firstNum.value = '';

  operCnt += 1;
  if (operCnt > 1) {
    num2 = firstNum.value;
    let answer = operate(oper, Number(num1), Number(num2));
  
    firstNum.value = answer;
  };
  console.log(operCnt,num1,num2,firstNum.value);
  console.log(numArr);
});


let container = document.querySelector('#container');

//Edited
equals.addEventListener('click', () => {
  num2 = firstNum.value;
  let answer = operate(oper, Number(num1), Number(num2));

  firstNum.value = answer;
});


//firstNum single clicks
let zeroBtn = document.querySelector('#zero1');
let oneBtn = document.querySelector('#one1');
let twoBtn = document.querySelector('#two1');
let threeBtn = document.querySelector('#three1');
let fourBtn = document.querySelector('#four1');
let fiveBtn = document.querySelector('#five1');
let sixBtn = document.querySelector('#six1');
let sevenBtn = document.querySelector('#seven1');
let eightBtn = document.querySelector('#eight1');
let nineBtn = document.querySelector('#nine1');

zeroBtn.addEventListener('click', () => {firstNum.value += '0';});
oneBtn.addEventListener('click', () => {firstNum.value += '1';});
twoBtn.addEventListener('click', () => {firstNum.value += '2';});
threeBtn.addEventListener('click', () => {firstNum.value += '3';});
fourBtn.addEventListener('click', () => {firstNum.value += '4';});
fiveBtn.addEventListener('click', () => {firstNum.value += '5';});
sixBtn.addEventListener('click', () => {firstNum.value += '6';});
sevenBtn.addEventListener('click', () => {firstNum.value += '7';});
eightBtn.addEventListener('click', () => {firstNum.value += '8';});
nineBtn.addEventListener('click', () => {firstNum.value += '9';});


//Clear buttons
let clear1 = document.querySelector('#clear1');

clear1.addEventListener('click', () => {
  firstNum.value = '';
  num1 = 0;
  num2 = 0;
  operCnt = 0;
  numArr = [];
});

//when page is fresh and after i press clear

//Make a difference from new numbers and old
//  -ex: when i type 2 for the first time and when i type it alot for
//  like 22222 and pressing an operator(see iphone calc. for reference)

//Try calculating results from array
//  -keep appending to array
//  -use last and second to last to calculate

//Have numbers straight through
//  -when operator is pressed keep number on display until next number is pressed

//add decimals
//only allow 1 decimal on display