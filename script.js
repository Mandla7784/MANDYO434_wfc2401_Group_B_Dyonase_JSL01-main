function validateSyntax(){
    let pattern = /^[A-Za-z0-9]+$/;
let result = ''; // Placeholder for validation result
const dots = document.querySelector('#dot-res');
// Get the input value from the user
let input = document.getElementById('petInput').value;

// Check if input starts with 'pet_' and followed by alphanumeric characters

if (input.startsWith('pet_')) {
    let secondPart = input.split("_")[1];
    let year = secondPart.substring(0, 4);
    let name = secondPart.substring(4);

    if (/^\d{4}$/.test(year) && pattern.test(name)) {
        result = 'Valid syntax';
        dots.style.backgroundColor = 'green'

    } else {
        result = 'Invalid syntax';
        dots.style.backgroundColor = 'red'
    
    }
}

// Update the result displayed on the webpage
document.getElementById('result').innerText = result;
}
