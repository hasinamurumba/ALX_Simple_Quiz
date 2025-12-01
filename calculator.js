// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 === 0 ? "Error: Cannot divide by zero" : number1 / number2;
}

// Helper function to get input values
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Add button event
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Subtract button event
document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Multiply button event
document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const

