function myCalc(param){
console.log(param);
var num1 = parseInt(document.getElementById("number1").value);
var num2 = parseInt(document.getElementById("number2").value);
var result;

if (param == 'add') {
	result = num1 + num2;
	}
	else if (param == 'multiply') {
	result = num1 * num2;
	}
	else if (param == 'subtract') {
	result = num1 * num2;
	}
	else if (param == 'divide') {
	result = num1 / num2;
	}

document.getElementById("demo").innerHTML = 'Answer: ' + result;
}