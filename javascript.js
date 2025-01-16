function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, c){
    switch (b){
        case "+":
            return add(a, c);
        case "-":
            return subtract(a, c);
        case "*":
            return multiply(a, c);
        case "/":
            return divide(a, c);
    }      
}

const display = document.querySelector("#calcDisplay");
const displayButton = document.querySelectorAll(".displayButton");
const equalButton = document.querySelector(".equalButton");
const clearButton = document.querySelector(".clearButton");

displayButton.forEach(button => {
    button.addEventListener('click', () => {
        let currentDisplayValue = display.textContent;
        const buttonValue = button.textContent;
        currentDisplayValue += buttonValue;
        display.textContent = currentDisplayValue;
    });
});

equalButton.addEventListener('click', () => {
    const operation = display.textContent.split(/([+\-*/])/);
    const a = parseInt(operation[0]);
    const b = operation[1];
    const c = parseInt(operation[2]);
    if(b == "/" && c == 0){
        display.textContent = "World Ended"
        return;
    }
    const solution = operate(a, b, c);
    display.textContent = solution;
});

clearButton.addEventListener('click', () => {
    display.textContent = "";
})
