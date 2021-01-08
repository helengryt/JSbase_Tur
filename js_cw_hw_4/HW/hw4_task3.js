/*3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
		Функция должна вернуть "Even" или "Odd";

		function isEven(num) {
			// your code here
		}*/

var num = +prompt("Enter a number");
function isEven(num) {
			console.log((num % 2 == 0) ? "even" : "odd"); 
		}
isEven(num);