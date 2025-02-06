// Опис ДЗ: Перевірка теорії ймовірності. 
// Напишіть функцію, яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
// Порахувати кількість парних та непарних серед них. 
// Обчислити відсоткове співвідношення 
// Приклад функції checkProbabilityTheory(count). 
// Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

// Умови виконання ДЗ. Функція виводить інформацію:
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних


function checkProbabilityTheory(count) {
    if (count <= 0){
        console.log("Введіть число більше 0");
        return;
    };

    let evenNumbers = 0;
    let oddNumbers = 0;
    for(let i = 0; i < count; i++){
        const generatedCount = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (generatedCount % 2 === 0){
            evenNumbers++;
        } else {
            oddNumbers++;
        };
    };
    
    let percentage;
    if (oddNumbers > 0){
        percentage = (evenNumbers / oddNumbers) * 100;
    } else{
        percentage = Infinity;
    };

    console.log(`Кількість згенерованих чисел: ${count}, 
    Кількість парних чисел: ${evenNumbers},
    Кількість непарних чисел: ${oddNumbers},
    Відсоток парних до непарних: ${percentage.toFixed(2)}%`);
};

checkProbabilityTheory(100);