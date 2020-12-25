/*5. Остановите цикл, когда i = 7 и выведите в консоль все числа до 7 пропустив 3.
            for (var i = 0; i < 10; i++) {}*/

            var i;

            for (i = 0; i < 10; i++) {
            	
            	if (i == 7) {
            		console.log(i);
            		break;
            	} else if (i==3){
            			console.log('[]');
            			continue;
            	} else {
                console.log(i);
            	}
           	
            }