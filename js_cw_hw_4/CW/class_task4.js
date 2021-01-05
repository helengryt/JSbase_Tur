/*4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
        Ваш ответ должен быть числом.
        "The quick brown fox jumped over the lazy dog"*/

function getLongest(array) {
	var words = array.split(' ');
	var longestWord = 0;
	for (var i = 0; i < words.length; i++){
		if(words[i].length > longestWord){
			longestWord = words[i].length;
		}
	}
	return longestWord;
	//console.log(words);
}

console.log(getLongest("The quick brown fox jumped over the lazy dog"));