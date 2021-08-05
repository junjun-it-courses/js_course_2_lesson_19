var foo = "foobar";
console.log(foo, window.foo)
foo === window.foo; // Возвращает: true



function greeting() {
    console.log("Hi!");
}


greeting();
window.greeting(); // Тоже самое что и обычный вызов: greeting();


// Глобальная функция greeting была сохранена в объекте window,
// подобно следующему примеру:

// greeting: function greeting() {
//     console.log("Hi!");
// }