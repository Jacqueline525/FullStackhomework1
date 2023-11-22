// Function to calculate the sum of two numbers
function calculateSum() {
    // Get the values from the input fields
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    // Check if the input values are numeric
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        // Display an alert if non-numeric values are entered
        alert("Sorry! This only works with numbers. Please try again.");
        return;
    }

    // Calculate the sum with parseFloat to handle any rogue inputs
    var sum = parseFloat(firstNumber) + parseFloat(secondNumber);

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + sum;
}
