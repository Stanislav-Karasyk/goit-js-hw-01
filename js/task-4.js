'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let userInput = prompt('Сколько дроидов Вы хотите купить?');
userInput = Number(userInput)

if (!userInput) {
    alert('Отменено пользователем!');

}  else if ( pricePerDroid * userInput > credits) {
    alert('Недостаточно средств на счету!');

} else {
    totalPrice = pricePerDroid * userInput;
    credits -= totalPrice;
    alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
}
