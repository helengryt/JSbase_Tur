/*3. Используя скобочные обозначения, выберите элемент из myArray так, чтобы myData был равен:
			8 и выведите в консоль
			11 и выведите в консоль
		
		// Setup
		var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
		var myData;*/

var myData;
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

myData=myArray[2][1];
console.log(myData);

myData=myArray[3][0][1];
console.log(myData);