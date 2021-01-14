/* 1.  Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). 
Вернуть усеченную строку с ... окончанием.

        function truncateString(str, num) {
            // your code here

            return str;
        }

        truncateString("A-tisket a-tasket A green and yellow basket", 8);*/

function truncateString(str, num) {
	var str;
	var num;
	var newStr = str.split(" ");
	//return newStr;

	var newStrS = newStr.splice(6,1);
	return newStr; 
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));