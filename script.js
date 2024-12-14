const display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += value;
      }
    } else if (value) {
      currentInput += value;
    }

    if (button.id === "equals") {
      const result = calculate(
        Number(previousInput),
        Number(currentInput),
        operator
      );
      currentInput = result.toString();
      previousInput = "";
      operator = "";
    }

    if (button.id === "clear") {
      currentInput = "";
      previousInput = "";
      operator = "";
    }

    display.textContent = currentInput || "0";
  });
});

function calculate(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
  return 0;
}
