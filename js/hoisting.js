// Поднятие
// https://developer.mozilla.org/ru/docs/Glossary/Hoisting

/* не генерирует ошибку, так функция была поднята
создалась на этапе компиляции, это работает с Function Declaration */

// catName("Серый");
//
// function catName(name) {
//     console.log("Моего кота зовут " + name);
// }



/* не генерирует ошибку, так как num объявлен */

// num = 6;
// num + 7;
// var num;
// console.log(num)


// JavaScript "поднимает" только объявление, но не инициализацию.

// var x = 1; // Инициализируем x
// console.log(x + " " + y);  // '1 undefined'
// var y = 2;
// код выше и код ниже одинаковые

// var x = 1; // Инициализируем x
// var y; // Объявляем y
// console.log(x + " " + y);  // '1 undefined'
// y = 2; // Инициализируем y