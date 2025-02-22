// В нас є масив об'єктів в яких міститься email.
// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. 
// Постарайтеся також зробити просту валідацію до @ - одне, або два слова, 
// які можуть містити (латинські букви, цифри) i можуть бути розділені крапкою.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    }
];

const trustedEmails = arr.filter(entry => {
    const pattern = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+?(@gmail\.com|@yahoo\.com)$/;
    return pattern.test(entry.email);
}).map(entry => entry.email);

console.log(trustedEmails);