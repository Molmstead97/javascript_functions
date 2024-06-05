function addNums(x, y) {
    return x + y;
}

function multiplyNums(x, y) {
    return x * y;
}

function squareNums(x) {
    return multiplyNums(x, x);
}

function addNumSquares(x, y) {
    return addNums(squareNums(x), squareNums(y));
}

function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return {num1, num2};
}

function add() {
    const {num1, num2} = getInputValues();
    const result = addNums(num1, num2);
    alert(`${num1} + ${num2} is ${result}`);
}

function multiply() {
    const {num1, num2} = getInputValues();
    const result = multiplyNums(num1, num2);
    alert(`${num1} * ${num2} is ${result}`);
}

function square() {
    const {num1} = getInputValues();
    const result = squareNums(num1);
    alert(`${num1} squared is ${result}`);
}

function addSquares() {
    const {num1, num2} = getInputValues();
    const result = addNumSquares(num1, num2);
    alert(`${num1} squared + ${num2} squared is ${result}`);
}
