let firstNumber;
let secondNumber;
let currentOperator;

function inputNumber(x) {
    if (document.getElementById('input').value === "0") {
        document.getElementById('input').value = x;
    } else {
        const y = document.getElementById('input').value;
        document.getElementById('input').value = y + x;
    }
}

function inputOperator(x) {
    firstNumber = document.getElementById('input').value;
    currentOperator = x;
    resetNumber();
}

function outputNumber() {
    secondNumber = document.getElementById('input').value;
    if (currentOperator === "+") {
        document.getElementById('input').value = Number(firstNumber) + Number(secondNumber);
    } else if (currentOperator === "-") {
        document.getElementById('input').value = Number(firstNumber) - Number(secondNumber);
    } else if (currentOperator === "*") {
        document.getElementById('input').value = Number(firstNumber) * Number(secondNumber);
    } else  document.getElementById('input').value = Number(firstNumber) / Number(secondNumber);
}

function resetNumber() {
    document.getElementById('input').value = 0;
}

document.getElementById("one").addEventListener("click", function(){ inputNumber(1); });
document.getElementById("two").addEventListener("click", function(){ inputNumber(2); });
document.getElementById("three").addEventListener("click", function(){ inputNumber(3); });
document.getElementById("four").addEventListener("click", function(){ inputNumber(4); });
document.getElementById("five").addEventListener("click", function(){ inputNumber(5); });
document.getElementById("six").addEventListener("click", function(){ inputNumber(6); });
document.getElementById("seven").addEventListener("click", function(){ inputNumber(7); });
document.getElementById("eight").addEventListener("click", function(){ inputNumber(8); });
document.getElementById("nine").addEventListener("click", function(){ inputNumber(9); });
document.getElementById("zero").addEventListener("click", function(){ inputNumber(0); });

document.getElementById("plus").addEventListener("click", function(){ inputOperator("+"); });
document.getElementById("minus").addEventListener("click", function(){ inputOperator("-"); });
document.getElementById("multiply").addEventListener("click", function(){ inputOperator("*"); });
document.getElementById("divide").addEventListener("click", function(){ inputOperator("/"); });

document.getElementById("equals").addEventListener("click", function(){ outputNumber(); });
document.getElementById("clear").addEventListener("click", function(){ resetNumber(); });


