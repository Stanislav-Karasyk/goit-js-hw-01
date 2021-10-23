function promoCode(code) {
  let codeArr = numberArr(code);

  if (codeArr.length !== 8) return 0;

  let odd1 = false;
  let even1 = [];
  let odd2 = false;
  let even2 = [];
  let odd3 = false;

  let tmp = [];
  let oddSum = 0;
  let evenSum = 0;

  for (let key = 0; key < codeArr.length; key++) {
    isOdd(codeArr[key]) ? (oddSum += codeArr[key]) : (evenSum += codeArr[key]);

    if (isOdd(codeArr[key]) && isOdd(codeArr[key + 1])) {
      isOdd(codeArr[key + 1])
        ? (oddSum += codeArr[key + 1])
        : (evenSum += codeArr[key + 1]);

      tmp.push(codeArr[key]);
      tmp.push(codeArr[key + 1]);

      if (odd1 && odd2 && tmp.length) {
        odd3 = tmp;
        tmp = [];
      } else if (odd1 && tmp.length) {
        odd2 = tmp;
        tmp = [];
      } else if (!odd1 && tmp.length) {
        odd1 = tmp;
        tmp = [];
      }
      key++;
    }

    if (odd1 && !isOdd(codeArr[key]) && !odd2) {
      even1.push(codeArr[key]);
    } else if (odd1 && odd2 && !isOdd(codeArr[key])) {
      even2.push(codeArr[key]);
    }
  }

  console.log('odd3 >>>', odd3);
  console.log('odd2 >>>', odd2);
  console.log('odd1 >>>', odd1);
  console.log('even1 >>>', even1);
  console.log('even2 >>>', even2);
  console.log('evenSum >>>', evenSum);
  console.log('oddSum >>>', oddSum);

  if (
    odd1[0] < odd1[1] &&
    even1.length &&
    odd2[0] < odd2[1] &&
    (odd3 ? even2.length && odd3[0] < odd3[1] : true)
  )
    return 2000;
  else if (
    odd1 &&
    odd1.length === 2 &&
    even1.length &&
    odd2 &&
    odd2.length === 2
  )
    return 1000;
  else if (evenSum > oddSum) return 100;

  return 0;

  function numberArr(number) {
    if (!number || typeof number !== 'number') return [];

    let n = Math.abs(number);
    let arr = [];

    do {
      n /= 10;
      arr.push(n % 10);
    } while (n >= 1);

    arr.pop();
    arr.unshift((arr[0] % 1) * 10 + 0.1);

    return arr.map(digit => Math.trunc(digit)).reverse();
  }

  function isOdd(number) {
    return number % 2 !== 0;
  }
}

console.log(promoCode(84533920));

// module.exports = promoCode;
