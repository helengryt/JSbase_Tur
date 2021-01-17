/*4. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. 
Функция должна возвращать логическое значение.*/

        function checkPositive(arr) {
        	console.log(arr.some(item => item = (item < 0)? true : false));
        }
        checkPositive([1, 2, 3, -4, 5]);