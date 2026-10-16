
function calculate(op) {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let result;

    if (op === '+') result = a + b;
    else if (op === '-') result = a - b;
    else if (op === '*') result = a * b;
    else if (op === '/') {
        if (b === 0) {
            document.getElementById("result").innerText =
                "Cannot divide by zero";
            return;
        }
        result = a / b;
    }

    document.getElementById("result").innerText = "Result: " + result;
}
