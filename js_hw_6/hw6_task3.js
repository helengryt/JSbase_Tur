/*  3. Допишите функцию countOnline; используйте оператор for ... in в этой функции для циклического обхода пользователей 
в объекте users и возврата количества пользователей, для которых для свойства онлайн установлено значение true.*/

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
            },
        };

        function countOnline(obj) {
        	var count = 0;
        	for (var name in users) {
        		for (var prop in users[name]) {
    				if (users[name][prop] == true) {
        			count++;
        			}
        		}
        	} console.log(count);
        }
        countOnline(users);