/*1. Напишите функцию, которая принимает массив в качестве аргумента. 
        Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

        ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']*/

var cond = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];

function weatherCond(array){

	console.log(array.slice(2, 4));
}



weatherCond(cond);