'use strict';

let cost;
let massage;
let isValid = true;


let userInputCountry = prompt('Укажите страну доставки');
    
if (userInputCountry === null) {
    massage = 'Отменино пользователем';
    isValid = false;
} else {
    switch (userInputCountry.toLowerCase()) {
    case 'китай':
        cost = 100;
        break;
    
    case 'чили':
        cost = 250;
        break;
    
    case 'австралия':
        cost = 170;
        break;
    
    case 'индия':
        cost = 80;
        break;
    
    case 'ямайка':
        cost = 120;
        break;
    
        default:
            massage = 'В вашей стране доставка не доступна';
            isValid = false; 
            break;
    }
}

if (isValid) {
    massage = `Доставка в ${userInputCountry} будет стоить ${cost} кредитов`;
}
alert(massage);


