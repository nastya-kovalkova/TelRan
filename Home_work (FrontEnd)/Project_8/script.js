// Задание №1
// Написать цикл, который создает множество параграфов с каждым десятым
// числом в промежутке от 100 до 50(т.е. 100, 90, 80, 70, 60, 50).
// Добавить созданные параграфы в div с классом numbers.
//----------------------------------------------------------

const mainDiv = document.querySelector("div");
mainDiv.setAttribute("class", "numbers");

for (let i = 100; i >= 50; i -= 10) {
    mainDiv.innerHTML += `<p>${i}</p>`;
}

//-------------------------------------------------------------
// Задание №2
// Написать цикл, который проходится по массиву строк, для каждой
// строки создает параграф и добавляет его в div с классом strings_container.
// Строки взять произвольные.
//--------------------------------------------------------------

// const goods = ["Lenovo", "Macbook", "Asus", "Acer", "Dell"];
// const mainDiv = document.querySelector("div");
// mainDiv.setAttribute("class", "strings_container");

// for (let i = 0; i < goods.length; i++) {
//     mainDiv.innerHTML += `<p>${goods[i]}</p>`
// }

//--------------------------------------------------------------
// Задание №3
// Написать цикл, который проходится по массиву с объектами - у объектов
// свойства first_name, last_name и age(данные взять произвольные) -
// и создает карточки только для совершеннолетних пользователей.
// Карточка должна содержать информацию об имени, фамилии и возрасте
// пользователя.Добавить все карточки в div с классом users_container.
//---------------------------------------------------------------

// const users = [
//     {
//         first_name: "Anna",
//         last_name: "Koval",
//         age: "25"
//     },
//     {
//         first_name: "Anastasiia",
//         last_name: "Petrova",
//         age: "16"
//     },
//     {
//         first_name: "Olga",
//         last_name: "Simonova",
//         age: "30"
//     },
//     {
//         first_name: "Maksim",
//         last_name: "Ivanov",
//         age: "40"
//     },
//     {
//         first_name: "Igor",
//         last_name: "Popov",
//         age: "18"
//     }
// ];

// const mainDiv = document.querySelector("div");
// mainDiv.setAttribute("class", "users_container");

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18) {
//         mainDiv.innerHTML += `<div>
//                                 <p>${users[i].first_name}</p>
//                                 <p>${users[i].last_name}</p>
//                                 <p>${users[i].age} y.o.</p>
//                             </div>`
//     }
// }
