'use strict';

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;

// let userInput = prompt('Сколько дроидов Вы хотите купить?');
// userInput = Number(userInput)

// if (!userInput) {
//     alert('Отменено пользователем!');

// }  else if ( pricePerDroid * userInput > credits) {
//     alert('Недостаточно средств на счету!');

// } else {
//     totalPrice = pricePerDroid * userInput;
//     credits -= totalPrice;
//     alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
// }

// ===============================================================
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// const messages = [];

// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// for (let i = 0; i <= orders.length - 1; i += 1) {
//   messages.push(composeMessage.call(orders[i], i + 1))
// }
// console.log(messages);
// =====================================

const a = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    c: {
        a:5
    }
  },
};
const b = function(...args) {
   return console.log(args);
};
const d = [{ b: 1 }];

b(1,2,3)


// const res = b(...b);
// console.log(res);

const newA = Object.create(a)
console.log(hasOwnProperty(newA));
// hasOwnProperty(newA)