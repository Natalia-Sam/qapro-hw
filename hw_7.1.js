// Припустимо, у нас є об'єкт, властивості якого — назва послуги та її вартість
// Послуги можуть додаватися по ходу роботи
// Умови виконання ДЗ:
// Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
// Створити метод minPrice(), який повертає мінімальну ціну.
// Створити метод maxPrice(), який повертає максимальну ціну.

const services = {
    hairWashing: 500,
    hairCut: 1200,
    shaving: 800,

    price() {
        let sum = 0;
        for (let value in this) {
            if (typeof this[value] === 'number') {
                sum += this[value]
            } 
        }
        return sum;
    },

    minPrice() {
        let minPrice = Infinity;
        for (let value in this) {
            if (typeof this[value] === 'number') {
                if(this[value] < minPrice) {
                    minPrice = this[value];
                }
            } 
        } 
        return minPrice;
    },

    // minPrice() {
    //     const minPrice = Object.values(this).filter(price => typeof price === 'number');
    //     return Math.min(...minPrice);
    //   },

    maxPrice() {
        let maxPrice = 0;
        for (let value in this) {
            if (typeof this[value] === 'number') {
                if(this[value] > maxPrice) {
                    maxPrice = this[value];
                }
            } 
        } 
        return maxPrice;
    }

    // maxPrice() {
    //     const maxPrice = Object.values(this).filter(price => typeof price === 'number');
    //     return Math.max(...maxPrice);
    //   }
};

console.log(`Total price of the services: ${services.price()}`);
console.log(`The minimum price is: ${services.minPrice()}`);
console.log(`The maximum price is: ${services.maxPrice()}`);

// Adding new services 
services.coloring = 1500;
services.hairstyle = 80;
console.log(`Total price of the services after a new service has been added: ${services.price()}`);
console.log(`The minimum price after a new service has been added is: ${services.minPrice()}`);
console.log(`The maximum price after a new service has been added is: ${services.maxPrice()}`);
