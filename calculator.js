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

let populate = function(text){
    if(document.getElementById('field').textContent == '0' && text.match(/[1-9]/)){
        document.getElementById('field').textContent = text;
    } else {
        document.getElementById('field').textContent += text;
    }
}

let buttons = document.getElementsByClassName('button');

for(var i = 0; i < buttons.length-1; i++){
    (function() {
        var text = buttons[i].textContent;
        buttons[i].addEventListener("click", function() { populate(text)})
    }());   
}

let reset = function() {
    document.getElementById('field').textContent = '0';
}

document.getElementById('reset').addEventListener("click", function() { reset() })