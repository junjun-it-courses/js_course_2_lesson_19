// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

// Lexical Scope

// Переменная Name созданная внутри функции
// будет домупна и во воложенной функции displayName так
// как находятся в одной области видимости

// let vova = 'Dog';

// function init() {
//     const vova = "Mozilla";     // name - локальная переменная, созданная в init
//
//     function displayName() {    // displayName() - внутренняя функция, замыкани
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
//     // showMe()
// }
//
//
// init();



// Closure

// После выполнения функция удаляется, а значит удаляются и все
// переменные(агрументы) которые в ней существовали на момент вызова

// На самом деле это так, но не всегда

function makeFunc() {
    const name = "Mozilla";

    function displayName() {
        alert(name);
    }

    return displayName;
}


let myFunc = makeFunc();
myFunc();


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
//     return function() {
//         document.body.style.fontSize = size + 'px';
//     };
// }
//
// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;