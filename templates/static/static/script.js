function press(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

// Keyboard support 🔥
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if ("0123456789+-*/.%".includes(key)) {
        press(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        let val = document.getElementById("display").value;
        document.getElementById("display").value = val.slice(0, -1);
    }
});
