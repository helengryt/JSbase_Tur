/*2. Завершите написание функции getArrayOfUsers, чтобы она возвращала массив, содержащий все свойства объекта, 
который он получает в качестве аргумента.*/

        let users = {
            Alan: {
                age: 27,
                online: false
            },
            Jeff: {
                age: 32,
                online: true
            },
            Sarah: {
                age: 48,
                online: false
            },
            Ryan: {
                age: 19,
                online: true
            }
        };

        function getArrayOfUsers(obj) {
        	for (var name in users) {
        		for (var prop in users[name]) {
        		console.log(name + " " + prop + ": " + users[name][prop]);
        		}
        	}
        }
        getArrayOfUsers(users);