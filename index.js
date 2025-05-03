function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
let memory = "";

function operate(operator, x, y) {
  if (operator == "+") {
    return add(x, y);
  } else if (operator == "-") {
    return subtract(x, y);
  } else if (operator == "*") {
    return multiply(x, y);
  } else if (operator == "/") {
    return divide(x, y);
  }
}

let nums = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector(".display");

function displayContent(input) {
  display.textContent = input;
}

function clearDisplay() {
  display.textContent = "";
  memory = "";
}

let allClear = document.querySelector(".clear");
allClear.addEventListener("click", () => {
  clearDisplay();
});

function validEquation(memory) {
  console.log(memory);

  console.log("validating memory");

  let isValid = true;
  let x;
  let y;
  let operator;
  let equationList = memory.split("");
  console.log(equationList);

  [x, operator, y] = equationList;
  if (
    operator != "+" ||
    operator != "-" ||
    operator != "/" ||
    operator != "*"
  ) {
    console.log(operator);

    isValid = false;
  }
  if (!parseInt(x) || !parseInt(y)) {
    console.log(`x is ${x}`);
    console.log(`y is ${y}`);

    isValid = false;
  } else {
    isValid = true;
  }
  console.log(isValid);

  return isValid;
}

function splitEquation(memory) {
  let x;
  let y;
  let operator;
  let equationList = memory.split("");
  console.log(equationList);

  [x, operator, y] = equationList;
  return operator, x, y;
}

function addToMemory(num) {
  console.log(memory);
  console.log("Adding to memory");

  let memorySplit = memory.split("");
  if (memorySplit.length == 3) {
    console.log("Memory too long currently");

    memorySplit.shift();
    memorySplit.push(num);
    console.log(memorySplit);
  } else {
    console.log("here");
    console.log("and adding to memory whilst under 3 chars");

    memorySplit.push(num);
    console.log(typeof memorySplit);

    console.log(memorySplit);
  }
  console.log(typeof memorySplit);

  memory = memorySplit.join("");
}

let equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  if (validEquation(memory)) {
    console.log("here");

    let result = operate(splitEquation(memory));
    displayContent(result);
  }
});

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    let input = e.target.textContent;

    displayContent(input);
    console.log(memory);
    addToMemory(input);
    console.log(memory);

    console.log(input);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let input = e.target.textContent;
    addToMemory(input);
    console.log(memory);
  });
});
