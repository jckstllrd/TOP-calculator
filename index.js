firstOperand = null;
secondOperand = null;
firstOperator = null;
secondOperator = null;
displayValue = "0";
result = null;

const buttons = document.querySelectorAll(".btn");

function clickButton() {
  for (let i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener("click", () => {
      if (button.classList.contains("operand")) {
        inputOperand(button.value);
        updateDisplay();
      } else if (button.classList.contains("operator")) {
        inputOperator(button.value);
      } else if (button.classList.contains("equals")) {
        inputEquals();
        updateDisplay();
      }
    });
  }
}

clickButton()

inputOperand()