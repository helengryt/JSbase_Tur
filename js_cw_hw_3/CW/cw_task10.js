/*10. Сумма введённых чисел

		Создайте массив
		Через цикл запрашивайте у пользователя цифры
		Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
		Подсчитайте и верните сумму элементов массива.
		P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

var newArray = [];
var input;

while (input !== null && input !== " ") {
            input = prompt("Enter a new number");
            newArray = newArray.concat(input);
        }

console.log(newArray);

newArray = +newArray;

var sum = 0;

for (var i = 0; i < newArray.length; i++){
	sum = (sum + newArray[i]);
}

console.log(sum);

/*var input = prompt("Enter a new number");

console.log(input);
console.log(input !== null);
console.log(input !== "");*/