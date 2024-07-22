// Basic JavaScript Calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return undefined;
    }
    return a / b;
}

// Calculator operation
function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            console.log("Invalid operation");
            return undefined;
    }
}

// Example usage
console.log(calculator(10, 5, 'add')); // 15
console.log(calculator(10, 5, 'subtract')); // 5
console.log(calculator(10, 5, 'multiply')); // 50
console.log(calculator(10, 5, 'divide')); // 2
console.log(calculator(10, 0, 'divide')); // Error: Division by zero is not allowed.