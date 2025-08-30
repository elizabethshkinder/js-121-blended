// alert("Hello!");

// const login = prompt("Login");
// console.log(login);

// const sure = confirm("Are you sure?");
// console.log(sure);

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так, то виведіть повідомлення 'Вірно' у alert().
//    Якщо ні, то виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Enter the number"));
// if (number === 10) {
//     alert(`True`){
//         else {
//             alert(`False`);
//         }
//     }
// }

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = 11;
// if (min <= 15) {
//   alert(`${min} include in first quarter`);
// }
// else if (min <=30) {
//     alert(`${min} include in second quarter`)
// }
// else if (min <=45){
//     alert(`${min} include in third quarter`)
// }

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt("Enter the number 1-4:"));
// console.log(num);

// switch (num) {
//   case 1:
//     result = "winter";
//     break;
//   case 2:
//     result = "spring";
//     break;
//   case 3:
//     result = "summer";
//     break;
//   case 3:
//     result = "autmn";
//     break;
//   default:
//     result = "Sorry, you need to enter number from 1 to 4";
// }
// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const time = prompt("Enter your local time");
// console.log(time);

// const totalMinutes = Number(time);
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const changeHours = String(hours).padStart(2, "0");
// const changeMinutes = String(minutes).padStart(2, "0");

// console.log("${changeHours}:${changeMinutes}");

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Write your login");

// if (login === "Admin") {
//   const pass = prompt("Enter your password");

//   if (pass === "I am a boss") {
//     alert("Hello!");
//   } else if (pass === "" || pass === null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password!");
//   }
// } else if (login === "" || login === null) {
//   alert("Canceled");
// } else {
//   alert("I do not know you");
// }

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let number = 0;

// while (number <=20){
//     console.log(number);
//     num+-1;
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum + -i;
//     }
//   }
//   console.log(sum);
// }
// getNumbers(1, 20);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
//     return "Not a number!";
//   }
//   return a < b ? a : b;
// }
// console.log(min(1, 2));
// console.log(min(10, -10));
// console.log(min("5", 10));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm ('Are you sure your parents allow you?');
//   }
// }

// if (typeof age !== "number" || isNaN(age)) {
//   return ('Not a number!');
// }

// console.log(isAdult(20));
// console.log(isAdult(17));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num){
// for (let i = 1; i <= num; i+=1){
//     console.log(i);
//     if (i % 3 === 0 && i )
// }
// }

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

// Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді

// const url = "https://my-site.com/about";


