// Задание №1
// Напишите функцию, которая принимает два числовых аргумента и выводит
// в консоль все четные числа от большего к меньшему.
//------------------------------------------------------------------------
function evenNumbers(num1, num2) {
    if (num1 < num2) {
        for (let i = num2; i >= num1; i--) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
}
evenNumbers(10, 20);
//------------------------------------------------------------------------
//-----------------------------------------------------------------------
// Задание №2
// Напишите функцию power, которая принимает два числовых аргумента
// (основание степени и саму степень) и возвращает число в указанной степени.
// Значение степени должно быть указано по умолчанию 2.
//------------------------------------------------------------------------
// function power(num, pow) {
//     const result = num ** pow;
//     return result;
// }
// const myNumber = power(2, 5); // Напомните плиз почему console.log(result) не работает,
//                              //почему обязательно класть в переменную
// console.log(myNumber);
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Задание №3
// Напишите функцию, которая принимает числовой аргумент n
// и считает сумму чисел от 1 до n.
//------------------------------------------------------------------------
// function sumNumbers(num) {
//     let sum = 0;

//     for (let i = 1; i <= num; i++) {
//         result = sum += i;
//     }
//     return result;
// }

// const mySum = sumNumbers(4);
// console.log("Сумма чисел = " + mySum);
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Задание №4
// Напишите функцию, которая принимает два числовых аргумента
// n и m и считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль(в начале сумму четных чисел,
// а затем сумму нечетных).
//------------------------------------------------------------------------
// function sumsOfEvenOdd(n, m) {
//     let sumOfOdd = 0;
//     let sumOfEven = 0;
//     for (let i = n; i <= m; i++) {
//         if (i % 2 == 0) {
//             sumOfEven += i;
//         } else {
//             sumOfOdd += i;
//         }
//     }
//     console.log(`Сумма четных чисел = ${sumOfEven}`);
//     console.log(`Сумма нечетных чисел = ${sumOfOdd}`);
// }
// sumsOfEvenOdd(1,6);
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Задание №5
// Напишите функцию, которая принимает в качестве аргументов массив строк,
// а возвращает первый самый длинный элемент массива.
// Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов - функция возвращает
// первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'
//------------------------------------------------------------------------
// function showLongElement(array) {
//     let result = "";
//     if (array.length != 0) {
//         for (let i = 0; i < array.length; i++) {
//             if (result.length < array[i].length) {
//                 result = array[i];
//             }
//         }
//         return result;
//     }
//     else {
//         return null;
//     }
// }
// // const arrayOfStrings = [];
// const arrayOfStrings = ["school", "university", "cat", "vocabulary", "apple"];
// const longElement = showLongElement(arrayOfStrings);
// console.log(longElement);
//------------------------------------------------------------------------
// if ((array[i].length) > (array[i + 1].length)) {  //Подсскажите почему так нельзя написать?(
//     long_elem = array[i];
// }
//------------------------------------------------------------------------