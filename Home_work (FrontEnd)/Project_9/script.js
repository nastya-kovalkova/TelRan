//Задание №1
// Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона на
// зеленый и уменьшать его до размеров 100х100px.
//-----------------------------------------------------------
const button = document.querySelector(".btn");
const square = document.querySelector(".square");

button.addEventListener("click", function () {
    // square.setAttribute("class", "square square-small");
    // square.className = "square square-small";
    // square.classList.add("square-small");
    square.style.cssText = `
    transform: scale(0.5);
    background-color: #43A95A;`
})
//-----------------------------------------------------------
//-----------------------------------------------------------
//Задание №2
// Создать кнопку и розовый квадрат с размерами 200х200px.
// При клике на кнопку менять цвет на синий и выводить в консоль
// обновленный цвет квадрата.
//-----------s------------------------------------------------
// const button = document.querySelector(".btn");
// const square = document.querySelector(".square");

// button.addEventListener("click", function () {
//     const newColor = square.style.backgroundColor = "#2663FA";

//     console.log(`Новый цвет -> ${newColor}`);
// })
//-----------------------------------------------------------
//-----------------------------------------------------------
//Задание №3
// Создать кнопку и квадрат с размерами 150х150px.
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
//-----------------------------------------------------------
// const button = document.querySelector(".btn");
// const square = document.querySelector(".square-medium");

// button.addEventListener("click", function() {
//     square.style.transform = "scale(1.133)"
// })
//-----------------------------------------------------------
//-----------------------------------------------------------
//Задание №4
// Создать кнопку и div с классом root.
// При клике на кнопку в div создается параграф синего цвета.
// Текст параграфа произвольный.
//-----------------------------------------------------------
// const button = document.querySelector(".btn");
// const content = document.querySelector(".root");

// button.addEventListener("click", function () {
//     content.innerHTML = `
//     <p class="content-text">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//     </p>`
// })
//-----------------------------------------------------------
//-----------------------------------------------------------
//Задание №5
// Создать кнопку и div с классом root.
// При клике на кнопку в div создаются по очереди параграфы
// синего и зеленого цветов.Первый цвет синий.
//-----------------------------------------------------------
// const button = document.querySelector(".btn");
// const content = document.querySelector(".root");

// button.addEventListener("click", function () {
//      content.innerHTML += `<p class="content-text">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//         </p>`;
// })
//-----------------------------------------------------------
//-----------------------------------------------------------
// Задание №6
// При нажатии на каждую из кнопок менять цвет фона body на соответствующий
// element.style - свойство отвечающее за стили элемента
// Если после картинки нажимаем на цвет, то цвет не меняется. 
// Сделать так, чтобы после нажатия на картинку можно было поменять и цвет
//-----------------------------------------------------------
// const body = document.body;
// const buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function (event) {
//         if (event.target.id == "img") {
//             body.style.background = "url(./Images/picture.jpg)"
//         } else {
//             const color = event.target.getAttribute("color-attr");
//             body.style.background = color;
//         }
//     })
// }
//-----------------------------------------------------------