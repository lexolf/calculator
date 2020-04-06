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
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
        default:
            return 0
    }
}

// Create functions that finds operators and performs operations onn actions around them

let breakToOperate = function(query){
    while(query.length > 1){
        for(var i=0; i<query.length; i++){
            if(query[i] == '×' || query[i] == '÷'){
                query[i-1] = operate(query[i], query[i-1], query[i+1])
                if(query[i-1] == divide(1,0)){
                    return divide(1,0)
                }
                query.splice(i,i+1)
            }
        }
        for(var i=0; i<query.length; i++){
            if(query[i] == '+' || query[i] =='-'){
                query[i-1] = operate(query[i], query[i-1], query[i+1])
                query.splice(i,i+1)
            }
        }
    }
    return query[0]
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

let populate = function(input){
    var field = document.getElementById('field');
    if(field.textContent === '' || field.textContent === '0'){
        if(input.match(/[0-9]/)){
            field.textContent = input;
        } else if(input == '.'){
            field.textContent += input;
            document.getElementById('decimal').disabled = true;
        } else if(isOperand(input)){
            document.getElementById('decimal').disabled = false;
            if(isOperand(query[query.length-1])){
                if(field.textContent === '0'){
                    query.push('0');
                    query.push(input)
                } else {query[query.length-1] = input;
                }
            } else if(query.length == 0){
                query.push(0)
                query.push(input)
            } else {
                query.push(input)
            }
            field.textContent = '';
            console.log(query)
        } else if(input == '=' || field.textContent == '0'){ 
            query.push(0);
            field.textContent = breakToOperate(query);
            query = []
        } else if(input == '='){
            field.textContent = breakToOperate(query);
            query = []
        }
    } else if(isOperand(input)){
        query.push(field.textContent);
        query.push(input);
        document.getElementById('decimal').disabled = false;
        field.textContent = '';
    } else if(input.match(/[0-9]/)){
        field.textContent += input;
    } else if(input == '.' && !document.getElementById('decimal').disabled){
        document.getElementById('decimal').disabled = true;
        field.textContent += input;
    } else if(input.match('=')){ 
        query.push(field.textContent);
        field.textContent = breakToOperate(query);
        query = [];
    }
}

// Make buttons on the page functional

let buttons = document.getElementsByClassName('button');

for(var i = 0; i < buttons.length-1; i++){
    (function() {
        var input = buttons[i].textContent;
        buttons[i].addEventListener("click", function() { populate(input)})
    }());   
}

// Make reset button functional

let reset = function() {
    document.getElementById('field').textContent = '0';
    query = [];
}

document.getElementById('reset').addEventListener("click", function() { reset() })