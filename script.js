// variables
const screen = document.querySelector('#screen');

// store infix, post, and answer
let infix = "";
let postfix = "";
let answer;
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
                infix = screen.innerText;
                if (check_match()) {
                    infix_to_postfix();
                    evaluate_postfix();
                    screen.innerText = answer;
                }
                else {
                    alert('input not valid');
                }
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
    let calculator_stack = [];
    postfix = "";
    let index;
    for (index = 0; index < infix.length; ) {
        if(infix[index] === ' ') {
            index++;
        }
        else if (infix[index] === '(') {
            calculator_stack.push(infix[index]);
            index++;
        }
        else if (infix[index] === ')') {
            while (calculator_stack[calculator_stack.length-1] !== '(' && calculator_stack.length > 0) {
                postfix += calculator_stack.pop();
            }
            calculator_stack.pop(); // discard '('
            index++;
        }

        // put digit as a one number together
        else if (isCharNumber(infix[index])) {
            while (isCharNumber(infix[index])) {
                postfix += infix[index];
                index++;
            }
            postfix += ' ';
        }

        // for operators
        else {
            if (calculator_stack.length === 0) {
                calculator_stack.push(infix[index]);
                index++;
            }
            else {
                if (priority(infix[index]) > priority(calculator_stack[calculator_stack.length-1])) {
                    calculator_stack.push(infix[index]);
                    index++;
                }
                else {
                    while (calculator_stack.length !== 0 && priority(infix[index]) <= priority(calculator_stack[calculator_stack.length-1])) {
                        postfix += calculator_stack.pop();
                    }
                    calculator_stack.push(infix[index]);
                    index++;
                }
            }
        }
    }
    // append all operator into the postfix
    while (calculator_stack.length !== 0) {
        postfix += calculator_stack.pop();
    }
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
    }
    if (stack.length === 0) {
        return true;
    }
    alert("Group operator did not match, please check the problem.");
    return false;
}

function evaluate_postfix(){
    let numbers = [];
    let index, operator1, operator2, temp;
    let op;
    for (index = 0; index < postfix.length; index++) {
        if (postfix[index] === ' ') { // if empty space skip
            continue;
        }
        else if (isCharNumber(postfix[index])) { // take numbers
            temp = '';
            while (isCharNumber(postfix[index])) {
                temp += postfix[index];
                index++;
            }
            temp = +temp;
            numbers.push(temp);
        }
        else {  // for operators
            op = postfix[index]; 

            function takeNumbers(){
                if(numbers.length !== 0) {
                    operator1 = numbers.pop();
                }
                else {
                    alert("error");
                }
                if (numbers.length !== 0) {
                    operator2 = numbers.pop();
                }
            }

            switch (op) {
                case '+' :
                    takeNumbers();
                    numbers.push(operator1 + operator2);
                    break;
                case '-' :
                    takeNumbers();
                    numbers.push(operator1 - operator2);
                    break;
                case '*' :
                    takeNumbers();
                    numbers.push(operator1 * operator2);
                    break;
                case '/' :
                    takeNumbers();
                    numbers.push(operator2 / operator1);
                    break;
            }
        }
    }
    answer = numbers.pop();
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

function isCharNumber(c) {
    return (c >= '0' && c <= '9') || c === '.';
}