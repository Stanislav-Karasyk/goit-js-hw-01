# goit-js-hw-01


function numberArr(number) {
    if (typeof number !== 'number') return [];
  
    return Array.from(String(number), Number)
  }
  
  console.log(numberArr(123)); // [1,2,3]