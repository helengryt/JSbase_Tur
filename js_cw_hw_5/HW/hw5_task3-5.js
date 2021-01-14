/*3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.*/

var allEmployees = [];

function employees(){
	var employee = {
		name: prompt("Enter your name"),
		sName: prompt("Enter your last name"),
		age: prompt("Enter your age"),
		occupation: prompt("Enter your occupation"),
	};
	allEmployees.push(employee);
};

do {
	employees();
	var newEmpl = confirm("Would you like to add employee?");
} while (newEmpl);

console.log(allEmployees);


/*4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.*/



function addSalary(allEmployees){
	for (var i = 0; i < allEmployees.length; i++){
		if (allEmployees[i].occupation == "director"){
				allEmployees[i].salary = 3000;
			} else if (allEmployees[i].occupation == "manager") {
				allEmployees[i].salary = 1500;
			} else if (allEmployees[i].occupation == "programmer"){
				allEmployees[i].salary = 2000;
			} else {
				allEmployees[i].salary = 1000;
		}
	}
}
addSalary(allEmployees);


/*5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, 
salary.
       Параметр для сортировки принимается от пользователя.
       После выполнения функции — вывести информацию о сотрудниках.*/



function sortEmp(allEmployees) {
	
	for (var i = 0; i < allEmployees.length; i++){
		var name = allEmployees[i].name;
		var sName = allEmployees[i].sName;
		var age = allEmployees[i].age;
		var occupation = allEmployees[i].occupation;
		var salary = allEmployees[i].salary;
	};

			function sortByName(){
				allEmployees.sort(function( a, b ){
				var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
					if (nameA < nameB)
					  return -1
					if (nameA > nameB)
					  return 1
					return 0
			})
			};

			function sortBysName(){
				allEmployees.sort(function( a, b ){
				var nameA=a.sName.toLowerCase(), nameB=b.sName.toLowerCase()
					if (nameA < nameB)
					  return -1
					if (nameA > nameB)
					  return 1
					return 0
			})
			};

			function sortByAge(){
				allEmployees.sort(function( a, b ) {return a.age - b.age});
			};

			function sortBySalary(){
				allEmployees.sort(function( a, b ) {return a.salary - b.salary});
			};

			function sortByOccupation(){
				allEmployees.sort(function( a, b ){
				var nameA=a.occupation.toLowerCase(), nameB=b.occupation.toLowerCase()
					if (nameA < nameB)
					  return -1
					if (nameA > nameB)
					  return 1
					return 0
			})
			};


		var param = prompt("Enter sorting parameter");
		if (param == "Name"){
			sortByName();
		} else if (param == "Last name") {
			sortBysName();
		} else if (param == "Age") {
			sortByAge();
		} else if (param == "Salary") {
			sortBySalary();
		} else if (param == "Occupation") {
			sortByOccupation();
		} else {
			alert("Wrong parameter");
		}

	//console.log(allEmployees);
}
sortEmp(allEmployees);