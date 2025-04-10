let display = document.getElementById("display");
let currentValue = "";

function updateDisplay() {
  display.value = currentValue;
}

function appendNumber(number) {
  currentValue += number;
  updateDisplay();
}

function clearDisplay() {
  currentValue = "";
  updateDisplay();
}

function backspace() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function calculate(operator) {
  if (operator === "=") {
    try {
      currentValue = eval(currentValue);
    } catch (e) {
      currentValue = "Error";
    }
  } else {
    currentValue += operator;
  }
  updateDisplay();
}
