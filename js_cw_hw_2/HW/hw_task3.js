// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a = prompt('Введите число a');
var b = prompt('Введите число b');
var c = prompt('Введите число c');

var max;

if(a > b) {
	max = a;
} else {
	max = b;
}

if (c > max) {
	max = c;
} 

document.write(max);