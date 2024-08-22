// variables
const screen = document.querySelector('#screen');

// store infix, post, and answer
let infix = "";
let postfix = "";
let answer = "";
//

// Making the buttons function
const buttons = document.querySelectorAll('button');
for(let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener('click', function (btn){
        let id = btn.target.id;

        switch (id) {
            case 'zero':
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
            case '.':
                screen.innerText += '.';
                break;
            case '+':
                screen.innerText += '+';
                break;
            case '-':
                screen.innerText += '-';
                break;
            case '*':
                screen.innerText += '*';
                break;
            case '/':
                screen.innerText += '/';
                break;
            case '(':
                screen.innerText += '(';
                break;
            case ')':
                screen.innerText += ')';
                break;
            case '=':
                
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

//functions
function infix_to_postfix(){

}

//checking if group operators are valid
function check_match(){
    let stack = [];
    for (let index = 0; index < infix.length; index++){
        if (infix[index] === '(') {
            stack.push(infix[index]);
        }
        else if (infix[index] === ')') {
            stack.pop();
        }
        if (stack.length === 0) {
            return true;
        }
        alert("Group operator did not match, please check the problem.");
        return false;
    }
}

function evaluate_postfix(){

}

//determining operator's priority
function priority(operator){
    if (operator === '*' || operator === '/') {
        return 2;
    }
    else if (operator === '+' || operator === '-') {
        return 1;
    }
    else {
        return -1;
    }
}