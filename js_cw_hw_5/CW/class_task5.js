/*5.	Будет ли место?

			Боб работает водителем автобуса. Он подъезжает к остановке и ему нужно посчитать, сколько пассажиров он может 
			посадить в автобус.

			Напишите функцию, которая принимет три параметра:
			1 - количество людей, которое вмещает автобус.
			2 - число людей, находящихся в автобусе.
			3 - люди, ожидающие на остановке.

			Если место для всех достаточно, то функция должна вернуть 0, иначе, она должна вернуть количество людей, 
			которые не смогут поместиться.

			Примеры:
			enough(10, 5, 5);
			// 0, так как вместятся все
			enough(100, 60, 50);
			// 10, Не поместятся 10 из 50 */

var quanOverall = Number(); //количество людей, которое вмещает автобус
var quanBus = Number(); //число людей, находящихся в автобусе
var quanStop = Number(); //люди, ожидающие на остановке
var extra = Number((quanBus+quanStop)-quanOverall);

function enough(quanOverall, quanBus, quanStop){
	if (quanBus + quanStop <= quanOverall){
		return "0";
	} else {
		return (extra + ", Не поместятся " + extra + " из " + quanStop);
	}
}
console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));