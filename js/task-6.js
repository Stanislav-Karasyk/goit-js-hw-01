'use strict';

let input;
let total = 0;


do {
   input = prompt('Введите число');

    if (input === null) {
        break;
    }
    
    input = Number(input);
    total += input;

} while (true);

alert(`Общая сумма чисел равна ${total}`);