// Create variable to perform operations on

var query = [];

// Create basic mathematical operations

let add = function(a,b) {
    return a+b
}

let subtract = function(a,b) {
    return a-b
} 

let multiply = function(a,b) {
    return a*b
}

let divide = function(a,b) {
    if(b != 0){
        return a/b
    } else {
        return "Wait. That's illegal."
    }
}

// Create function to execute math operations 

let operate = function(operator,a,b) {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return 0
    }
}

// Check if operand is entered

let isOperand = function(input){
    if(input == '-' || input == '+' || input == '×' || input == '÷'){
        return true;
    } else {
        return false;
    }
}

// Function that updates input field upon user input

let populate = function(text){
    var field = document.getElementById('field');
    if(field.textContent === '' || field.textContent === '0'){
        if(text.match(/[0-9]/)){
            field.textContent = text;
        } else if(text == '.'){
            field.textContent += text;
            document.getElementById('decimal').disabled = true;
        } else if(isOperand(text)){
            field.textContent = '';
            document.getElementById('decimal').disabled = false;
            query.push(0);
            query.push(text);
        } else if(text.match('=')){ 
            preOperate(query);
        }
    } else if(isOperand(text)){
        query.push(field.textContent);
        query.push(text);
        document.getElementById('decimal').disabled = false;
        field.textContent = '';
    } else if(text.match(/[0-9]/)){
        field.textContent += text;
    } else if(text == '.' && !document.getElementById('decimal').disabled){
        document.getElementById('decimal').disabled = true;
        field.textContent += text;
    }
}

// Make buttons on the page functional

let buttons = document.getElementsByClassName('button');

for(var i = 0; i < buttons.length-1; i++){
    (function() {
        var text = buttons[i].textContent;
        buttons[i].addEventListener("click", function() { populate(text)})
    }());   
}

// Make reset button functional

let reset = function() {
    document.getElementById('field').textContent = '0';
}

document.getElementById('reset').addEventListener("click", function() { reset() })