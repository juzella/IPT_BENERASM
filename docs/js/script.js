function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    let result;

    // Validation check for numbers
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        result = 'Please enter valid numbers';
    } else {
        result = (num1 * num2) / num3 + num4 - num5; 
    }

    // Displaying result
    document.getElementById('result').textContent = 'Result: ' + (isNaN(result) ? result : result.toFixed(2));
}

function changeFontSize(value) {
    const result = document.getElementById('result');
    const currentSize = parseFloat(window.getComputedStyle(result).fontSize);
    result.style.fontSize = (currentSize + value) + 'px';
}
