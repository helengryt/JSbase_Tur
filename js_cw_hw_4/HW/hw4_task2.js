/*Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
		Проверить числа на корректность*/


function pow(a,b){
	var step = a;
	for(var i = 1; i < b; i++){
		step = a*step;
	} return step;
}

var a = +prompt("Введите число");
var b = +prompt("Введите степень");

if(b < 1 || a == 0){
	alert("ошибка, введите целое число больше 1");
} else {
console.log(pow(a,b));
}