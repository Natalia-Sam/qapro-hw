// Написати функцію pow(x,y) яка буде приймати 2 цисла, 
// перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
// Наприклад pow(2,3) функція поверне значення 8.
// Не використовувати **
// Не використовувати функції або інші матеріали які ми не вивчали  


function pow(x, y) {
    let result = x;
    for (let i = x; i <= y; i++) {
        result *= x;
    };
    return result;
};

console.log(pow(2, 3));