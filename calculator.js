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