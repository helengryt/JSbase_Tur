/*Доминантные элементы массива

			Доминантным является элемент массива, который больше, чем сумма элементов, следующих за ним. 
			Напишите функцию, которая принимает массив чисел и возвращает массив из доминантных чисел.

			Примеры:
			 solve([1,21,4,7,5]) = [21,7,5] 
			 solve([5,4,3,2,1]) = [5,4,3,2,1]*/

var arr = [];

 function solve(arr){
 	for (var i=0; i<arr.length; i++){
 		var sum = arr[i]+arr[i+1]+arr[i+2];
 		if (arr[i]>sum){
 			var newArr=arr.concat(arr[i]);
 			
 		}
 	} return arr;
 }
console.log(solve([1,21,4,7,5]));
//console.log(arr);