/*1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, 
в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения 
его координат, и повторно вызавая метод GetQuadrant.*/

var x = prompt("Enter x coordinate");
var y = prompt("Enter y coordinate");

var point = {
	x: x,
	y: y,

	GetQuadrant: function(){
		if (x > 0){
			if (y > 0){
			console.log("I");
			} else {
			console.log("IV");
			}
		} else {
			if (y > 0){
			console.log("II");
			} else {
			console.log("III");
			}
		}
	}
	}
point.GetQuadrant();