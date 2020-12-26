/*4. Дано два числа A и B где (A < B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. */

var a = +prompt('Введите число a');
var b = +prompt('Введите число b');
var sum = 0;
var odd;
var i;

if(a >= b) {
	alert('Mistake')
} else {
	for (i = a; i <= b; i++) {
		 sum = sum + i;
	}
	document.write(sum+'<br/>');
}

for (i = a; i <= b; i++){
	if (i % 2 != 0) {
		odd = i;
	} else {
		continue;
	}
	document.write(odd+'<br/>');
}