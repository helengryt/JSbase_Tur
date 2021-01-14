/*2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, 
который проходит проверку на истинность (второй аргумент). 
        Если ни один элемент не проходит тест, вернуть undefined.

        function findElement(arr, func) {
            return item;
        }*/


var arr = [];
var func;
var item = arr[0];

function findElement(arr, func) {
            for(var i = 0; i < arr.length; i++){
            	if(func == true){
            		return item;
            	} else {
            		return undefined;
            	}
            }
        }

console.log(findElement())