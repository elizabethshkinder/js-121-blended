// ---------------------- Завдання 1 -------------------------

// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector("body");

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataElement = document.querySelectorAll("[data-topic]");

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataFirstElement = document.querySelector("[data-topic]");

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataLastElement = dataElement[dataElement.length -1];

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const sibling = document.querySelector("h1");
// const sibling = title.nextElementSibling;

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allTitles = document.querySelectorAll("h3");
// allTitles.forEach(elem => console.log(elem.textContent));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір;
// allTitles.forEach(elem => elem.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const findListElem = document.querySelector("li[data-topic = 'navigation']");

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим;
findListElem.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const liNavP = findListElem.querySelector("p");
liNavP.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const el = document.querySelector(`[data-topic = ${currentTopic}]`);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
el.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const header = document.querySelector('.completed');

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
header.parentElement.remove();
// header.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)";
const pEl = document.createElement("p");
pEl.textContent = "Об'єктна модель документа (Document Object Model)";

// title.insertAdjacentElement('afterend', pEl);
// title.after(pEl);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const liElem = document.createElement("li");
list.append(liElem);

const liHeader = document.createElement("h3");
liHeader.textContent = "Властивість innerHTML";

const liP = document.createElement('p');
liP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

liElem.append(liHeader, liP);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markUp = `
<li>
    <h3>Властивість innerHTML</h3>
    <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
</li>

`;
list.insertAdjacentHTML('beforeend', markUp);

// 20 - очисти список
list.innerHTML = "";

console.log();


// ---------------------- Завдання 2 -------------------------

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const arrayElems = [];

for(let i = 0; i < 100; i++){
const el = document.createElement("div");
el.classList.add("number");
const num = randomNumber();
el.textContent = num;

if(num % 2 === 0) {
    el.classList.add("even");
} else {
    el.classList.add("odd");
}

arrayElems.push(el);
};

const container = document.querySelector(".number-container");
container.append(...arrayElems);



// ---------------------- Завдання 3 -------------------------

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


// const input = document.querySelector(".contact-form-input");
// input.addEventListener("input", checkInput);

// function checkInput() {
//     if(input.value.length > 6) {
//         input.classList.add("success");
//         input.classList.remove("error");
//     } else if (input.value.length < 6) {
//         input.classList.add("error");
//         input.classList.remove("success");
//     }
// }

// function checkInput(){
//     input.classList.toggle("success", input.ariaValueMax.length > 6);
//     input.classList.toggle("error", input.ariaValueMax.length <= 6);
// }

// input.addEventListener("focus", focusInput);

// function focusInput(){
//     if(input.value.trim() === "") {
//         input.style.outline = '3px solid red';
//     } else {
//         input.style.outline = '3px solid green';
//     }
// }

// input.addEventListener("blur", blurInput);

// function blurInput(){
//     if(input.value.trim() === "") {
//         input.style.outline = '3px solid red';
//     } else {
//         input.style.outline = '3px solid lime';
//     }
// }


const form = document.querySelector(".contact-form");
form.addEventListener("submit", submitFoo);

function submitFoo(event) {

    event.preventDefault();
    const {accept, userName} = event.target.elements;
    if (accept.checked || userName.value.trim()) {
        alert("Enter name");
        return;
    }

    console.log({
        userName: userName.value.trim(),
    });

    form.reset();
}


const input = document.querySelector(".contact-form-input");
input.addEventListener("input", inputFoo);



// ---------------------- Завдання 4 -------------------------

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
