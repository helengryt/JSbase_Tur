/*7. Напишите код, который будет спрашивать логин с помощью prompt.

			Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – 
			показать «Отменено», в противном случае отобразить «Я вас не знаю».

			Пароль проверять так:
			Если введён пароль «Я главный», то выводить «Здравствуйте!»,
			Иначе – «Неверный пароль»,
			При отмене – «Отменено».
			
			Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. 
			Нажатие клавиши Esc во время запроса возвращает null.*/


	var login = prompt('Введите логин');

	if (login == "Админ") {
		var pass=prompt('Введите пароль');
	} else if (login == null) {
		alert('Отменено');
	} else {
		alert('Я Вас не знаю');
	}
	
	if (pass == "Я главный"){
		alert('Здравствуйте!');
	} else if (pass == null) {
		alert('Отменено!');
	} else {
		alert('Неверный пароль');
	}