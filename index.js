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

let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

function displayContent(input) {
  display.textContent = input;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let input = e.target.textContent;
    displayContent(input);
    console.log(input);
  });
});
