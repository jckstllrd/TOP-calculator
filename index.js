firstOperand = null;
secondOperand = null;
firstOperator = null;
secondOperator = null;
displayValue = "0";
result = null;

const buttons = document.querySelectorAll(".btn");

function updateDisplay() {
  const display = document.querySelector(".display");
  display.innerText = displayValue;
}

function debugLog() {
  console.log(
    firstOperand,
    firstOperator,
    secondOperand,
    secondOperator,

    result,
    displayValue
  );
}

updateDisplay();

function clickButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      if (buttons[i].classList.contains("operand")) {
        inputOperand(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains("operator")) {
        inputOperator(buttons[i].value);
      } else if (buttons[i].classList.contains("equals")) {
        inputEquals();
        updateDisplay();
      } else if (buttons[i].classList.contains("clear")) {
        clearDisplay();
        updateDisplay();
      } else if (buttons[i].classList.contains("sign")) {
        inputSign();
        updateDisplay();
      } else if (buttons[i].classList.contains("percent")) {
        inputPercent();
        updateDisplay();
      } else if (buttons[i].classList.contains("decimal")) {
        inputDecimal();
        updateDisplay();
      }
    });
  }
}

clickButton();

function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function round(number) {
  return parseFloat(number.toFixed(3).replace(/[.,]000$/, ""))
  // return parseFloat(number.toFixed(2));
}

function inputPercent() {
  firstOperand = displayValue;
  firstOperand /= 100;
  displayValue = firstOperand;
}

function inputSign() {
  if (displayValue === "0") {
    return;
  } else {
    displayValue = -Number(displayValue);
  }
}

function inputOperand(operand) {
  if (firstOperator === null) {
    if (displayValue === "0") {
      displayValue = operand;
    } else if (displayValue == firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  } else if (firstOperator != null) {
    if (displayValue == firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  }
  debugLog();
}

function inputOperator(operator) {
  if (firstOperator != null && secondOperator === null) {
    console.log("here");

    // Evaluates current equation after adding a second operator
    secondOperand = displayValue;
    secondOperator = operator;

    result = round(operate(
      Number(firstOperand),
      Number(secondOperand),
      firstOperator
    ));
    displayValue = result;
    firstOperand = result;
    secondOperand = null;
    firstOperator = secondOperator;
    secondOperator = null;
    updateDisplay();
  } else if (firstOperator != null && secondOperator != null) {
    secondOperator = operator;
    secondOperand = displayValue;
  } else {
    firstOperand = displayValue;
    firstOperator = operator;
  }
  debugLog();
}

function clearDisplay() {
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  displayValue = "0";
  result = null;
}

function inputEquals() {
  if (firstOperator != null) {
    secondOperand = displayValue;
    debugLog();
    result = round(operate(
      Number(firstOperand),
      Number(secondOperand),
      firstOperator
    ));
    console.log(result);

    displayValue = result;
    firstOperand = result;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    debugLog();
  }
}

function operate(x, y, op) {
  if (op == "+") {
    return x + y;
  } else if (op == "-") {
    return x - y;
  } else if (op == "*") {
    return x * y;
  } else if (op == "/") {
    return x / y;
  }
}
