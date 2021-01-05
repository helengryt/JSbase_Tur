/*4. Создать два произвольных массива: 
        один массив - любимая спортивная команда / модели автомобилей / города, 
        во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
    Из двух массивов сделайте ассоциативный массив.
    Массив, который будет выступать в качестве ключа - должен содержать уникальные значения*/


var countries = ["Ukraine", "France", "Germany", "USA", "Canada"];
var cities = ["Kyiv", "Paris", "Berlin", "Washington", "Ottawa"];


var newArray = new Array();
for(var i = 0; i < countries.length; i++){
  newArray[countries[i]] = cities[i];
}
console.log(newArray);

