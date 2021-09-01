function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

function operate(op, a, b) {
  if (op == "+") {
    return add(a, b);
  } else if (op == "-") {
    return subtract(a, b);
  } else if (op == "x") {
    return multiply(a, b);
  } else if (op == "÷") {
    return divide(a, b);
  } else {
    return "Invalid operator";
  }
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


//BASIC CALCULATOR V2
let firstNum = document.querySelector('#firstNum');
//v2 let oper = document.querySelector('#operator');
let oper;
let secondNum = document.querySelector('#secondNum');
let equals = document.querySelector('#equals');

//Operators
let division = document.querySelector('#division');
let mult = document.querySelector('#multiply');
let subt = document.querySelector('#subtract');
let addBtn = document.querySelector('#add');

division.addEventListener('click', () => {
  oper = '÷';
});
mult.addEventListener('click', () => {
  oper = 'x';
});
subt.addEventListener('click', () => {
  oper = '-';
});
addBtn.addEventListener('click', () => {
  oper = '+';
});

//operate(toString(oper.value), Number(firstNum.value), Number(secondNum.value))

let container = document.querySelector('#container');

equals.addEventListener('click', () => {
  let answer = operate(oper, Number(firstNum.value), Number(secondNum.value));

  container.textContent = answer;
});

//Next up, Calculator V3
//connect operator event listeners for onclick
//onclick make them equal a variable, change based on operator clicked
//when equals is pressed use what ever the operator is equals at the moment
//etc.