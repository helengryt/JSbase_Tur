/*Запросите у пользователя число и проверьте есть ли оно в массиве			
Если есть, то сколько раз встречается

		var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];*/


var num  = +prompt("Enter a number");

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 5, 5];

var count = 0;

for (var i=0; i <= myArray.length; i++) {
	if (myArray[i] == num){
		count++;
	} 
}
console.log(count);