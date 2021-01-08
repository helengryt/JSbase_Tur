/* 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
		Функция должна проверять корректность введенных чисел и знака операции.
		Все аргументы для функции принять от пользователя. */

function calculate(a, b, sign){
if (a == null || b == null || a == " " || b == " ") {
	alert("Mistake. Please, enter a number");
}
else {
	switch (sign){
		case "+": return (a + b);
		case "-": return (a - b); 
		case "*": return (a * b); 
		case "/": return (a / b); 
		default: return("Wrong sign. Please, enter one of the following: +, -, *, /");
	}
}
}

var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
var sign = prompt("Enter operation sign");

var calc = calculate(a, b, sign);
console.log(calc);