// 'use strict';

// const total = 100;
// const ordered = 50;

// if (ordered > total) {
//     console.log('На складе недостаточно твоаров!')
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер')
// }

const variants = {
  edges: [
    {
      node: {
        sku: "aaa",
        entityId: 1,
      },
    },
    {
        node: {
          sku: "bbb",
          entityId: 2,
        },
      },
      {
        node: {
          sku: "ccc",
          entityId: 3,
        },
      },
  ],
};

const first = 1;
const after = true;

console.log(variants.edges.length );

// if(variants.edges.length !== 0 &&)

// const newArr = variants.edges.slice()
// console.log(newArr);

// variants.edges.map(edge => {
//     if (variants.edges.length >= first){
//         console.log(edge);
//     }  
//       })


if(first < 0){
    console.log("error")
} if (variants.edges.length > first) {
    const newArr = variants.edges.slice(0, first);
    console.log(newArr);
    const newArr2 = variants.edges.slice(first, variants.edges.length);
    console.log(newArr2);

    console.log([...newArr, ...newArr2]);
    // variants.edges.slice().map(edge => edge);
    }

