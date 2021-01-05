/*5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
			Выведите массив в консоль
			Посчитайте сумму позитивных чисел из массива и выведите ее в консоль*/


var result = [];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRandom(-10, 10))

for (var i = 0; i < 10; i++){
	result.push(getRandom(-10, 10));
}
console.log(result);

var sum = 0;
for (var j = 0; j < 10; j++){
	if (result[j] > 0) {
		sum += result[j];
	}

}
console.log(sum);