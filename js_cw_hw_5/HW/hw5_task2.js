/*Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод.*/


var calculator = {
	x: +prompt("Enter 1st number"),
	y: +prompt("Enter 2nd number"),
	z: prompt("Enter sign"),

	plus: function (){
		return this.x+this.y;
	},

	minus: function (){
		return this.x-this.y;
	},

	multiply: function (){
		return this.x*this.y;
	},

	divide: function (){
		return this.x/this.y;
	},

	calc: function(){
		switch (this.z) {
			case "+": console.log(calculator.plus()); break;
			case "-": console.log(calculator.minus()); break;
			case "*": console.log(calculator.multiply()); break;
			case "/": console.log(calculator.divide()); break;
			default: console.log("Mistake. Try again");
		}
	}
}

calculator.calc();