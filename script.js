// Add function
function add(num1, num2){
    return num1 + num2;
}
//

// Subtract function
function subtract(num1, num2){
    return num1 - num2;
}
//

// Multiply function
function multiply(num1, num2){
    return num1 * num2;
}
//

// Divide function
function divide(num1, num2){
    return num1 / num2;
}
//

// variables
let num1 = 0;
let num2 = 0;

let operator = '';
//

// Operate function
function operate(num1, num2, operate){
    switch(operate){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            throw new Error("ERROR!!");
    }
}

