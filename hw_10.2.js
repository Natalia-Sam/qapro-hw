// Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, 
// які не містять літери «А» (великої або малої)
// Приклад виконання:
// Повинен знаходити: Wonderful, Joyful
// Не повинен знаходити: Happiness, Time, Task, Apple

// Added space to the exceptions to avoid searching for matches between 2 different words (validation results like 'ful Jo', 'yful H')
// Option 1 - searching with regExp without adding an additional variable
const pattern = /[^Aa ]{6}?/g;
const str = "Wonderful Joyful Happiness Time Task Apple";
console.log(str.match(pattern));

// // Option 2 - searching with regExp wit adding an additional variable
// const pattern = /[^Aa ]{6}?/g;
// const str = "Wonderful Joyful Happiness Time Task Apple";
// const matches = str.match(pattern);
// console.log(matches);