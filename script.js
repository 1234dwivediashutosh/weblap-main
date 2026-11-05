const display = document.getElementById('display');

// Operators ki ek list bana li
const operators = ['+', '-', '*', '/', '%', '.'];

function appendValue(value) {
    let currentDisplay = display.value;
    let lastChar = currentDisplay.slice(-1); // Display ka aakhiri character nikalna

    // Check karna ki jo button press hua hai kya wo ek operator hai
    if (operators.includes(value)) {
        
        // Agar display ekdum khali hai aur user direct operator dabaye (except minus)
        if (currentDisplay === '' && value !== '-') {
            return; // Kuch mat karo
        }

        // Agar aakhiri character bhi operator hai, toh usko naye operator se replace kar do
        if (operators.includes(lastChar)) {
            display.value = currentDisplay.slice(0, -1) + value;
            return;
        }
    }

    // Agar sab normal hai, toh value add kar do
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value === '') return;
        
        let result = eval(display.value);
        
        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
            setTimeout(clearDisplay, 1500);
            return;
        }
        
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}