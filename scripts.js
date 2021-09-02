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

//join array to make one number

//possibly add 2 functions onclick, 1 sets new number, 1 updates display

//Everytime a button clicks:
//append button value to array
//join array to make one value
//set new value to text area

//if further help is needed you always have google

/* let arrayNum = [];

function one() {arrayNum.push(1)};
function two() {arrayNum.push(2)};
function three() {arrayNum.push(3)};
function four() {arrayNum.push(4)};
function five() {arrayNum.push(5)};
function six() {arrayNum.push(6)};
function seven() {arrayNum.push(7)};
function eight() {arrayNum.push(8)};
function nine() {arrayNum.push(9)};
function zero() {arrayNum.push(0)};

let displayNum = arrayNum.join("");
function add1toDisplay(e) {
  one();
  document.getElementById("textArea").innerHTML = displayNum;
}; */


//SUPER BASIC PROMPT CALCULATOR
/*let firstNum = prompt('Enter first number:');
let oper = prompt('Enter operator');
let sencondNum = prompt('Enter second number:');*/

/* if (oper == '+') {
  alert(add(firstNum,sencondNum));
} else if (oper == '-') {
  alert(subtract(firstNum,sencondNum));
} else if (oper == 'x') {
  alert(multiply(firstNum,sencondNum));
} else if (oper = '÷') {
  alert(divide(firstNum,sencondNum));
} else {
  alert('Error, please try again');
} */

//alert(operate(oper, firstNum, sencondNum));
let num1;
let num2;

//BASIC CALCULATOR V2
let firstNum = document.querySelector('#firstNum');
//v2 let oper = document.querySelector('#operator');
let oper;
//let secondNum = document.querySelector('#secondNum');
let equals = document.querySelector('#equals');

//Operators
let division = document.querySelector('#division');
let mult = document.querySelector('#multiply');
let subt = document.querySelector('#subtract');
let addBtn = document.querySelector('#add');

division.addEventListener('click', () => {
  oper = '÷';
  num1 = firstNum.value;
  firstNum.value = '';
});
mult.addEventListener('click', () => {
  oper = 'x';
  num1 = firstNum.value;
  firstNum.value = '';
});
subt.addEventListener('click', () => {
  oper = '-';
  num1 = firstNum.value;
  firstNum.value = '';
});
addBtn.addEventListener('click', () => {
  oper = '+';
  num1 = firstNum.value;
  firstNum.value = '';
});

//operate(toString(oper.value), Number(firstNum.value), Number(secondNum.value))

let container = document.querySelector('#container');

equals.addEventListener('click', () => {
  num2 = firstNum.value;
  let answer = operate(oper, Number(num1), Number(num2));

  //container.textContent = answer;
  firstNum.value = answer;
});

//Next up, Calculator V3
//connect operator event listeners for onclick
//onclick make them equal a variable, change based on operator clicked
//when equals is pressed use what ever the operator is equals at the moment
//etc.

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


//secondNum single clicks
/*
let zeroBtn2 = document.querySelector('#zero2');
let oneBtn2 = document.querySelector('#one2');
let twoBtn2 = document.querySelector('#two2');
let threeBtn2 = document.querySelector('#three2');
let fourBtn2 = document.querySelector('#four2');
let fiveBtn2 = document.querySelector('#five2');
let sixBtn2 = document.querySelector('#six2');
let sevenBtn2 = document.querySelector('#seven2');
let eightBtn2 = document.querySelector('#eight2');
let nineBtn2 = document.querySelector('#nine2');

zeroBtn2.addEventListener('click', () => {secondNum.value += '0';});
oneBtn2.addEventListener('click', () => {secondNum.value += '1';});
twoBtn2.addEventListener('click', () => {secondNum.value += '2';});
threeBtn2.addEventListener('click', () => {secondNum.value += '3';});
fourBtn2.addEventListener('click', () => {secondNum.value += '4';});
fiveBtn2.addEventListener('click', () => {secondNum.value += '5';});
sixBtn2.addEventListener('click', () => {secondNum.value += '6';});
sevenBtn2.addEventListener('click', () => {secondNum.value += '7';});
eightBtn2.addEventListener('click', () => {secondNum.value += '8';});
nineBtn2.addEventListener('click', () => {secondNum.value += '9';});
*/

//Clear buttons
let clear1 = document.querySelector('#clear1');
//let clear2 = document.querySelector('#clear2');

clear1.addEventListener('click', () => {firstNum.value = '';});
//clear2.addEventListener('click', () => {secondNum.value = '';});


//Next: Have numbers straight through
//  -when page is fresh, have a zero
//  -when first number is clicked delete zero and append numbers after that
//  -when operator is pressed keep number on display until next number is pressed

//add decimals
//only allow 1 decimal on display