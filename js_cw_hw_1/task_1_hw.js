var x1 = prompt("Введите x1");
var x2 = prompt("Введите x2");
var y1 = prompt("Введите y1");
var y2 = prompt("Введите y2");

var k = ((y1-y2)/(x1-x2));
var b = (y2-k*x2);
var y = (k*x1+b);

document.write(k+'<br>'+b+'<br>'+y+'<br>');

