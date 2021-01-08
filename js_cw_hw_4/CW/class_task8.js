/*8.	Сумма в диапазоне
		
			Напишите 2 функции.
			Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его 
			Т.е. принимает 3 параметра и А не может быть больше чем B
			Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]
			
			Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
			Должна быть валидация индексов
				- Чтобы не было отрицательных чисел
				- Чтобы индекс не выходил за рамки допустимых индексов
				- Чтобы первый индекс был меньше или равен второму
			
			Пример вывода в консоль:
			Массив: [.....] сгенерированный от A до B
			Сумма чисел в диапазоне от индекса C по индекс D равна: 10*/
var arr = [];
var a, b, n;

function getRandom(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function generateArray(n, a, b) {
    if (a > b || a == b) {
        return "False";
    }

    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(getRandom(a, b));
    }

    return arr;
}

function calcArray(c, d, arr) {
    var sum = 0;
    for (var j = c; j < d; j++) {
        sum = sum + arr[j];
    }

    return sum;
}

var n = 8;
var a = 1;
var b = 10

var generatedArray = generateArray(n, a, b);
console.log("Массив: [" + generatedArray + "] сгенерированный от " + a + " до " + b);

var calculatedSum = calcArray(2, 5, generatedArray);
console.log(calculatedSum);