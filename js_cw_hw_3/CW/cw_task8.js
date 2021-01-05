/*8. Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.
		Первый элемент в каждом подмассиве должен содержать строку с именем элемента. Второй элемент должен быть числом, 
		представляющим цену, т.е.
		[«Шоколадная плитка», 15]
		В списке должно быть не менее 5 подмассивов.
		Выведите в консоль список всех покупок без цен
		Используйте методы добавления удаления элементов из массива*/

var myList = [["Chocolate", 15],["Tomato", 10],["Banana", 25],["Milk", 20],["Bread", 5],["Butter", 30]];
var newList;

for (var i=0; i < myList.length; i++){
	console.log(myList[i][0]);
}

var newItem = ["Juice",50];

newList = myList.push(newItem);
console.log(myList); // adds juice at the end and returns the array

newList = myList.pop(newItem);
console.log(newList); // deleted item from the end
console.log(myList); // list without item

newList = myList.unshift(newItem);
console.log(newList); // array length
console.log(myList); // adds new element in the beginning of the array, returns new array

newList = myList.shift(newItem);
console.log(newList); // deleted item from the beginning
console.log(myList); // returns new array without a deleted element

newList = myList.concat(newItem);
console.log(newList);//returns as elements, NOT as an Array

newList = myList.slice(2);
console.log(newList); //returns array starting from Banana

newList = myList.slice(-2);
console.log(newList); //returns array starting from Bread (Bread+Butter)

newList = myList.slice(2,-2);
console.log(newList);//returns Banana and Milk