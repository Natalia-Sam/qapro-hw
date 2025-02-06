// Написати функцію pow(x,y) яка буде приймати 2 числа, 
// перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
// Наприклад pow(2,3) функція поверне значення 8.
// Не використовувати **
// Не використовувати функції або інші матеріали які ми не вивчали


function pow(x, y) {
    let result = 1;
    let iterationY = y;
    if (y < 0) {
        iterationY *= -1;
    }

    for (let i = 1; i <= iterationY; i++) {
        if (y >= 0) {
            result *= x;
        } else {
            result /= x;
        }
    }
    return result;
};

console.log(pow(3, 3));
