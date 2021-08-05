// Global scope
// https://developer.mozilla.org/ru/docs/Glossary/Global_object
// https://www.w3schools.com/js/js_scope.asp

// var foo = "foobar";
// foo === window.foo; // Возвращает: true
//
// function greeting() {
//     console.log("Hi!");
// }


// Functional scope / Local Scope

// function myFunction() {
//     let carName = "Volvo";
//     var ExVar = 'string';
//     const ExConstVar = 'some const variable'
//
//     function vova() {
//         console.log('vova')
//     }
//     // code here CAN use carName
// }
//
// console.log(ExVar)
// console.log(carName, ExVar, ExConstVar, vova)


// Block Scope / ES6 JS Standart
// Переменные, объявленные с помощью ключевого слова var,
// НЕ могут иметь область видимости блока.

// Блочная видимость подразумевает объявление любых переменных
// (let, const) в {} - Функции, условия, Циклы ...

// {
//     var y = 3;
//     let x = 2;
//     const z = 15;
//     console.log(x)
//     console.log(z)
// }
//
// console.log(y)
// console.log(x)
// console.log(z)

// if(true) {
//     let alex = 321;
// }
//
// // console.log(vova)
// console.log(alex)