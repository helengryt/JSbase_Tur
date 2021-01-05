/*9. Давайте произведём 5 операций с массивом.

			9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
			9.2 Добавьте «Рок-н-ролл» в конец.
			9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать 
			для массивов с любой длиной.
			9.4 Удалите первый элемент массива и покажите его.
			9.5 Вставьте «Рэп» и «Регги» в начало массива.*/

//9.1
var styles = ["Jazz", "Blues"];
var newStyles;

//9.2
newStyles=styles.push("Rock-n-Roll");
console.log(styles);
console.log(styles.length);

//9.3
var middle = "Classic";

if (styles.length % 2 == 0){
	styles[styles.length/2] = middle;
} else {
	styles[(styles.length-1)/2] = middle;
}
console.log(styles);

//9.4
console.log(styles.shift());

//9.5
newStyles = styles.unshift("Rep","Reggae");
console.log(styles);