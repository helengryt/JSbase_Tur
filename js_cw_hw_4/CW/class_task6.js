/* 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
			Определите наименьшее и наибольшее число в массиве.
			Массив, минимальное и максимальное число - вывести в консоль.*/

var result = [];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var n = +prompt("Введите количество элементов в массиве");
for (var i = 0; i < n; i++){
	result.push(getRandom(-10, 10));
}
console.log(result);

var min = 10;
var max = -10;

for (var j = 0; j < n; j++){
	if (result[j] >= max) {
		max = result[j];
	}
}
console.log("Максимальное число массива: " + max);

for (var j = 0; j < n; j++){
	if (result[j] <= min) {
		min = result[j];
	}
}
console.log("Минимальное число массива: " + min);