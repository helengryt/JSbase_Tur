
// 1. Сделать собственные примеры методов применяемых для массивов.

var myList = [["Chocolate", 15],["Tomato", 10],["Banana", 25],["Milk", 20],["Bread", 5],["Butter", 30]];
var newList;

for (var i=0; i < myList.length; i++){
	console.log(myList[i][0]);
}

var newItem = ["Juice",50];

newList = myList.push(newItem);
console.log(myList); // adds juice at the end and returns the array

newList = myList.pop(newItem);
console.log(newList); // deleted item from the end
console.log(myList); // list without item

newList = myList.unshift(newItem);
console.log(newList); // array length
console.log(myList); // adds new element in the beginning of the array, returns new array

newList = myList.shift(newItem);
console.log(newList); // deleted item from the beginning
console.log(myList); // returns new array without a deleted element

newList = myList.concat(newItem);
console.log(newList);//returns as elements, NOT as an Array

newList = myList.slice(2);
console.log(newList); //returns array starting from Banana

newList = myList.slice(-2);
console.log(newList); //returns array starting from Bread (Bread+Butter)

newList = myList.slice(2,-2);
console.log(newList);//returns Banana and Milk

newList = myList.join("; ");
console.log(newList); // строка

newList = myList.reverse();
console.log(newList); //массив в обратном порядке

/*newList = myList.splice(1,2);
console.log(newList); // deleter items
console.log(myList); // modifies result in the line 44*/

newList = myList.sort();
console.log(newList); // отсортировало по алфавиту по первой букве названия