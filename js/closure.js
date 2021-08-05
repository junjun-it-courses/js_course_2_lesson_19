// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

// Переменная Name созданная внутри функции
// будет доступна и во воложенной функции displayName так
// как находятся в одной области видимости

// let vova = 'Dog';

// function init() {
//     const vova = "Mozilla";     // name - локальная переменная, созданная в init
//
//     function displayName() {    // displayName() - внутренняя функция, замыкание
//         alert (vova);           // displayName() использует переменную, объявленную в родительской функции
//
//         function lll( ) {
//             console.log(vova)
//         }
//
//         lll();
//
//     }
//
//     function showMe() {
//         console.log(vova)
//     }
//
//     displayName();
//     showMe()
// }
//
//
// init();



// Closure

// После выполнения функция удаляется, а значит удаляются и все
// переменные(агрументы) которые в ней существовали на момент вызова

// На самом деле это так, но не всегда

// function makeFunc() {
//     let name = "Mozilla";
//
//     function displayName() {
//         alert(name);
//     }
//
//     return displayName;
// }
//
//
// let myFunc = makeFunc();
// console.log(myFunc)
//
// myFunc();


// В примере выше мы можем видеть что функция makeFunc была вызвана и выполнена
// но в качестве результата ее выполнения вернулсь функция displayName которая
// в данный момент была записана в переменную myFunc

// Функция displayName содержит в себе переменную которая
// объявлена в родительской функции и в таком случае после выполнения функции myFunc
// у нас все еще остается доступ к ее переменным даже после ее завершения, а это
// значит что Лексическое окружение не было удалено если переменные которые
// в нем объявлены гдето используются


// Example

// Пишем функцию которая будет возвращать
// нам новую функцию на основе аргументов


// function makeSizer(size) {
//     let s = size;
//
//     return function() {
//         document.body.style.fontSize = s + 'px';
//     };
// }
//
// let size12 = makeSizer(12);
// let size14 = makeSizer(14);
// let size16 = makeSizer(16);
//
// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;


function counter() {
    let counter = 0;
    return function () {
        return ++counter;
    }
}

let newCounter1 = counter();
let newCounter2 = counter();
let newCounter3 = counter();

console.log(newCounter1())

newCounter2();
console.log(newCounter2())


console.log(newCounter3())
