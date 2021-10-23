// 'use strict';

// const name = 'Генератор защитного поля';
// let price = 1000;

// let result = `Выбран "${name}", цена за штуку ${price} кредитов`

// console.log(result);

// price = 2000;

// result = `Выбран "${name}", цена за штуку ${price} кредитов`

// console.log(result);

// ===============================================

// const time = Date.now();

// console.log("милисекунд",time);
// console.log("секунд ",time / 1000);
// console.log("минут ",time / (1000 * 60) );
// console.log("часов ",time / (1000 * 60 * 60) );

// console.log(new Date(1628843734221));

// const startTime = Date.now();
// const endTime = Date.now();

const fn = function () {
  const start = 1628846341976;
  const end = 1628846487401;
  // const res = start - end;

  const res = end - start;

//   console.log('мили сек', res);
//   console.log('сек', res / 1000);
const sum = Math.floor(res / (1000 * 60));

  console.log('мин', res / (1000 * 60));

//   console.log('мин МАЗ', Math.floor(res / (1000 * 60)));

//   console.log('час', res / (1000 * 60 * 60));

//   console.log('час МАЗ', Math.floor(res / (1000 * 60 * 60)));

  return alert( sum);
};

// bikes.find(bike => {
//   if (bike.id !== id) {
//     const start = bike.timeStartRent / (1000 * 60 * 60); //перевод  мс в ч
//     const end = bike.timeEndRent / (1000 * 60 * 60);

//     const start = Math.floor(bike.timeStartRent / (1000)); //перевод  мс в м
//     const end = Math.floor(bike.timeEndRent / (1000));

//     const start = bike.timeStartRent / (1000 * 60); //перевод  мс в м
//     const end = bike.timeEndRent / (1000 * 60);

//     const res = start - end;
//     const resMath = res / 100 ;
//     console.log('start', start);
//     console.log('end', end);
//     console.log('res', res);
//     console.log('resMath', resMath);
//   }
// });

setTimeout(fn, 1000);

// const sayHi = function sayHi() {
//     alert('Привет');
//   }

//   setTimeout(sayHi, 1000);
