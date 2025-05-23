// Вам необхідно вказати, яким буде результат операції 
// та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:

// 'number' + 3 + 3
console.log('number' + 3 + 3);
// Результатом буде number33, оскільки відбудеться конкатенація та неявне перетворення 3 у строки

// null + 3
console.log(null + 3);
// Результатом буде 3: Відбудеться неявне перетворення null в число 0

// 5 && "qwerty"
console.log(5 && "qwerty");
// Результат qwerty: Оскільки обидва значення true, повертає останнє значення

// +'40' + +'2' + "hillel";
console.log(+'40' + +'2' + "hillel");
// 42hillel: вібувається конкатенація рядків. В принципі, 40 та 2 з початку дані у вигляді рядків

// '10' - 5 === 6;
console.log('10' - 5 === 6);
// false: 10 буде неявно переведено в число (coercion). 10 - 5 = 5. І 5 не дорівнює 6. Відбувається строге порівняння, враховуючі тип змінних

// true + false
console.log(true + false);
// 1: true буде неявно переведено в число 1, а false у число 0

// '4px' - 3
console.log('4px' - 3);
// NaN: конкотинації немає, оскільки операція віднімання. '4px' не може бути перетворене у число, тому результат not a number

// '4' - 3
console.log('4' - 3);
// 1: Оскільки операція віднімання, то строка '4' неявно перетворюється у число

// '6' + 3 ** 0;
console.log('6' + 3 ** 0);
// 61: згідно пріоритезації (operator precedence), спочатку відбувається возведення у ступінь. Будь-яке число в 0 ступені буде 1.
// Далі відбувається конкатенація, оскільки у нас операція складання і '6' це строка

// 12 / '6'
console.log(12 / '6');
// 2: Оскільки операція ділення, то відбувається неявне перетворення типу даних '6' в число

// '10' + (5 === 6);
console.log('10' + (5 === 6));
// 10false: згідно operator precedence спочатку відбувається строге порівняння, яке дає false. Потім відбувається конкатенація строки '10' та false

// null == ''
console.log(null == '');
// false: For Loose equality - If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise return false. 

// 3 ** (9 / 3);
console.log(3 ** (9 / 3));
// 27: по пріоритетності йде групування, тобто ділення 9 на 3, а потім возведення 3 у 3 ступінь

// !!'false' == !!'true'
console.log(!!'false' == !!'true');
// true: "false" - це не пуста строка, тобто true. Подвійне логічне "НЕ" (!) дає конвертацію в true
// Те саме відбувається зі строкою "true". Тому порівняння true == true дає true

// 0 || '0' && 1
console.log(0 || '0' && 1);
// 1: спочатку буде обчислена операція '0' && 1, яка повертає 1 ('0' - це не пуста строка, тобто true. І 1 - це значення true). 
// А потім проводиться логічна операція 0 || 1, яка повертає 1 (true || false -> true)

// (+null == false) < 1;
console.log((+null == false) < 1);
// false: На відміну від null, у якого тип - це object, тип у +null - це number. Тому +null конвертується (coercion) у 0. False при неявній конвертації (coercion) у число - теж 0
// Вираз +null == false - це true, тобто 1. 1 не менша за 1, тому весь вираз false 

// false && true || true
console.log(false && true || true);
// true: спочатку виконується логічна операція false && true, що повертає false. 
// А потім виконується логічна операція false || true, що дає true

// false && (false || true);
console.log(false && (false || true));
// false: спочатку виконується (false || true), яке дає true. А потім false && true, яке дає false

// (+null == false) < 1 ** 5;
console.log((+null == false) < 1 ** 5);
// false: На відміну від null, у якого тип - це object, тип у +null - це number. Тому +null конвертується (coercion) у 0. False при неявній конвертації (coercion) у число - теж 0
// вираз +null == false - це true, тобто 1. 1 в 5 ступені теж = 1. 1 не менша за 1, тому весь вираз false 