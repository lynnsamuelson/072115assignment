// // - In JavaScript, have a function divides a number by 10

// // - In JavaScript, have a function that multiplies a number by 5

// - When the button is clicked, call a JavaScript function that checks if 
// the user has entered in a value in the input field

// - If there is no value, put an appropriate message in an alert box
//  telling the user to enter something

// - If there is a value, and its numeric value is greater than 10000,
//  call a function that passes in the user-entered value as an argument, 
//  and the name of the function that divides by 10.

// -If there is a value, and its numeric value is less than 10000, 
// call a function that passes in the user-entered value as an argument, 
// and the name of the function that multiplies by 5. Write the result of 
// the calculation into the HTML document. (edited)

function divideByTen (num1) {
	return num1 / 10;
}

function multiplyByFive (num2) {
	return num2 * 5;
}

var button = document.getElementById("math");

var buttonClick = function () {
	var input = document.getElementById("input_field").value;
	console.log("The user entered" + input);
	console.log("The button was clicked");
	if (input === "") {
		alert("Enter a number");
	} else if (input > 10000) {
		return divideByTen;
	} else if (input < 10000) {
		return multiplyByFive;
	}

var outputData = document.getElementById("output");		
outputData.innerHTML = buttonClick();

