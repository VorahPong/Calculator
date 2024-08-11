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
//

// variables
const screen = document.querySelector('#screen');
let num1 = null;
let num2 = null;

let operator = null;
//

//
const buttons = document.querySelectorAll('button');
for(let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener('click', function (btn){
        let id = btn.target.id;

        switch (id) {
            case 'one':
                screen.innerText += '0';
                break;
            case 'one':
                screen.innerText += '1';
                break;
            case 'two':
                screen.innerText += '2';
                break;
            case 'three':
                screen.innerText += '3';
                break;
            case 'four':
                screen.innerText += '4';
                break;
            case 'five':
                screen.innerText += '5';
                break;
            case 'six':
                screen.innerText += '6';
                break;
            case 'seven':
                screen.innerText += '7';
                break;
            case 'eight':
                screen.innerText += '8';
                break;
            case 'nine':
                screen.innerText += '9';
                break;
            case '+':
                num1 = parseInt(screen.innerText);
                operator = '+';
                screen.innerText = '';
                break;
            case '-':
                num1 = parseInt(screen.innerText);
                screen.innerText = '';
                operator = '-';
                break;
            case '*':
                num1 = parseInt(screen.innerText);
                screen.innerText = '';
                operator = '*';
                break;
            case '/':
                num1 = parseInt(screen.innerText);
                screen.innerText = '';
                operator = '/';
                break;
            case '=':
                num2 = parseInt(screen.innerText);
                screen.innerText = operate(num1, num2, operator);
                break;
            case 'delete':
                screen.innerText = screen.innerText.slice(0, -1);
                break;
            case 'clear':
                screen.innerText = '';
                break;
            
            default:
        }
    });
}
//
