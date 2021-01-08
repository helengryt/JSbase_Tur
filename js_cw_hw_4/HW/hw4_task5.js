/*5.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
		
		var computerChoice = Math.random();
		alert(computerChoice);
		
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения 
        компьютера.
		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново */

var computerChoice = Math.random();
//alert(computerChoice);

if(computerChoice < 0.33){
		computerChoice = "Камень";
	} else if (computerChoice > 0.67) {
			computerChoice = "Бумага";
		} else {
			computerChoice = "Ножницы";
		}	
console.log(computerChoice);

var a = prompt("Введите Ваш выбор: камень, ножницы или бумага");
var k, n, b;

if(a == "камень"){
	a = "камень";
} else if(a == "ножницы"){
	a = "ножницы";
} else if(a == "бумага"){
	a == "бумага";
} else {
	alert("Введите правильное значение!")
}
console.log(a);

function compare(a, computerChoice) {

if (a = computerChoice){
	return "Ничья";
} } /*else if (a == "камень" && computerChoice == "Ножницы"){
	return "Вы выиграли";
}


}*/
console.log(compare(a, computerChoice));
