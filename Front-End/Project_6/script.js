// Задание №1
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Задание №2
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20

// for (let i = 55; i > 0; i--) {
//     if ((i <= 55) && (i >= 20)) {
//         console.log(i);
//     }
// }

// Задание №3
// Дан массив numbers.Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в
// него все элементы из массива numbers, возведенные в квадрат

// Задание №4
// Создать переменную last_elem и передать в нее последний элемент из сформированного
// массива numbers_squared(обратиться к элементу массива по индексу)

// const numbers = [3, 5, 11, 2, 8, 1, 6];
// const numbers_squared = [];

// for (let i = 0; i < numbers.length; i++) {
//     numbers_squared.push(numbers[i] ** 2); // 1 вариант
// numbers_squared[i] = numbers[i] ** 2;  // 2 вариант
// }

// const last_elem = numbers_squared[numbers_squared.length - 1]; // 1 вариант
// const last_elem = numbers_squared.slice(-1); // 2 вариант

// console.log(numbers);
// console.log(numbers_squared);
// console.log(last_elem);

// Задание №5
// Дан объект user.Используя данные из объекта, сформировать строку в
// формате: ‘User’s name is < FIRST_NAME > <LAST_NAME>. He is <AGE> years old’
//     const user = {
//         first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500
// }

// const user = {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500
// }

// console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`)

