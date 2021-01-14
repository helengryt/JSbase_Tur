/*Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод.*/


var x = +prompt("Enter 1st number");
var y = +prompt("Enter 2nd number");
var z = prompt("Enter sign");

var calculator = {
	x: x,
	y: y,
	z: z,

	plus: function (){
		return x+y;
	},

	minus: function (){
		return x-y;
	},

	multiply: function (){
		return x*y;
	},

	divide: function (){
		return x/y;
	},

	calc: function(z){
		switch (z) {
			case "+": console.log(calculator.plus()); break;
			case "-": console.log(calculator.minus()); break;
			case "*": console.log(calculator.multiply()); break;
			case "/": console.log(calculator.divide()); break;
			default: console.log("Mistake. Try again");
		}
	}
}

calculator.calc(z);