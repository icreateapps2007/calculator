let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;  // Appends the clicked value to the display
}

function clearDisplay() {
    display.value = '';  // Clears the display when the "C" button is clicked
}

function calculate() {
    try {
        display.value = eval(display.value);  // Evaluates the expression in the display
    } catch {
        display.value = 'Error';  // Shows "Error" if the evaluation fails
    }
}
