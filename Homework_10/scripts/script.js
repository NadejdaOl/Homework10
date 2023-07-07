// 1.Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const square = document.querySelector(".box");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
    // square.style.background = "green";
    // square.style.width = "100px";
    // square.style.height = "100px";
// });

//===========================================================

// 2.Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const square = document.querySelector(".box1");
// const btn = document.querySelector("button");
// const squareNew = () => {
    // const color = "blue";
    // square.style.background = color;
    // console.log(`Обновлен цвет квадрата:${color}`);
// };
// btn.addEventListener("click", squareNew);


//==========================================

//3.Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const square = document.querySelector(".box2");
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
     // square.style.width = "170px";
     // square.style.height = "170px";
 // });

//===========================================

 //4.Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
 // const root = document.getElementById("root");
 // const btn = document.querySelector("button");
 // btn.addEventListener("click", () => {
    // const text = "Rainbow";
    // const paragraph = document.createElement("p");
    // paragraph.textContent = text;
    // paragraph.style.color = "blue";
    // root.append(paragraph);
 // });


 //============================================
 //5.Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
 const root = document.getElementById("root");
 const btn = document.querySelector("button");
 btn.addEventListener("click", () => {
    const text = "Rainbow";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    root.append(paragraph);

    const allParagraphs = document.querySelectorAll("p");

    allParagraphs.forEach((eachParagraph, index) => {
        if (index %2 === 0) {
            eachParagraph.style.color = "blue";
        } else {
            eachParagraph.style.color = "green";
        } 
        });
    });










