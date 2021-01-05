 /*3. Напишите функцию которая бы переворачивала предоставленную строку
        Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
        Ваш результат должен быть строкой.
        "something"*/

function turn(array){
	var letters = array.split('');
    letters.reverse();
    return letters.join('');
}

console.log(turn('some text'));