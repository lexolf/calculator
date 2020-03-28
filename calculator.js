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

// Function that updates input field upon user input

let populate = function(text){
    var field = document.getElementById('field');
    if(!text.match(/[0-9]/) && !field.textContent.slice(-1).match(/[0-9]/)){
        field.textContent = field.textContent.slice(0,-1) + text;
    } else if(field.textContent == '0' && text.match(/[1-9]/)){
        field.textContent = text;
    } else {
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