/*8. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
            «Включительно» означает, что значение переменной age может быть равно 14 или 90. 
            Значение вводит пользователь*/

var age=prompt('How old are you?');

if (age>=14 && age<=90){
	console.log(true);
} else {
	console.log(false);
}