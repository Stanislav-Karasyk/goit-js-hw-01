function convertNumberToArray(number) {
  const arr = [];
  let code = number;

  while (code > 0) {
    arr.push(code % 10);

    code = parseInt(code / 10);
  }
  arr.reverse();

  return arr;
}

// Task 1 ---------
function isAnagram(strOne, strTwo, i, counter1, counter2, j) {
  i = i || 0;
  j = j || 0;

  const wordOne = strOne.toLowerCase().trim();
  const wordTwo = strTwo.toLowerCase().trim();

  if (wordOne.length !== wordTwo.length) {
    return false;
  }

  if (i < wordOne.length) {
    counter1 = counter1 || 0;
    counter2 = counter2 || 0;

    let letterOne = wordOne[i];

    if (j < wordOne.length) {
      let letterTwo = wordOne[j];

      if (letterOne === letterTwo) {
        counter1++;
      }

      letterTwo = wordTwo[j];

      if (letterOne === letterTwo) {
        counter2++;
      }

      return isAnagram(strOne, strTwo, i, counter1, counter2, ++j);
    }

    if (counter1 !== counter2) {
      return false;
    }

    return isAnagram(strOne, strTwo, ++i, counter1, counter2);
  }

  return true;
}

// Task 3 ---------

function calcQuantityDigigtsInNumber(number, result, i, j) {
  result = result || {};
  i = i || 0;
  j = j || 0;

  const numbers = convertNumberToArray(number);

  // Инициализация свойств объекта result
  if (i < numbers.length && j === 0) {
    const digit = numbers[i];

    result[digit] = 0;

    return calcQuantityDigigtsInNumber(number, result, ++i, j);
  }

  // Подсчет количества чисел
  if (j < numbers.length && i === numbers.length) {
    const digit = numbers[j];

    result[digit]++;

    return calcQuantityDigigtsInNumber(number, result, i, ++j);
  }

  return result;
}

// Task 4 ---------

function calcQuantityUniqWords(str, uniqWords, i, j, count) {
  uniqWords = uniqWords || [];
  i = i || 0;
  j = j || 0;

  const arrayOfWords = str.toLowerCase().split(' ');

  if (i < arrayOfWords.length) {
    const word = arrayOfWords[i];

    count = count || 0;

    if (j < arrayOfWords.length) {
      if (word === arrayOfWords[j]) {
        count++;
      }

      return calcQuantityUniqWords(str, uniqWords, i, ++j, count);
    }

    if (count === 1) {
      uniqWords.push(word);
    }
    return calcQuantityUniqWords(str, uniqWords, ++i);
  }

  return uniqWords.length;
}

// Task 5 ---------

function calcQuantityWords(str, result, i, j) {
  result = result || {};
  i = i || 0;
  j = j || 0;

  const arrayOfWords = str.toLowerCase().split(' ');

  // Инициализация свойств объекта result
  if (i < arrayOfWords.length && j === 0) {
    const word = arrayOfWords[i];

    result[word] = 0;

    return calcQuantityWords(str, result, ++i);
  }

  if (j < arrayOfWords.length && i === arrayOfWords.length) {
    const word = arrayOfWords[j];

    result[word]++;

    return calcQuantityWords(str, result, i, ++j);
  }

  return result;
}

// Task 6 ---------

function fibonacci(number, numbersFib, i) {
  i = i || 0;
  numbersFib = numbersFib || [0, 1];

  if (number <= 0) {
    return [];
  } else {
    if (i < number - 1) {
      let fib = numbersFib[i] + numbersFib[i + 1];

      numbersFib.push(fib);

      return fibonacci(number, numbersFib, ++i);
    }
  }

  return numbersFib;
}

// Task 8 ---------

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Task 9 ---------

function calcSumElems(arr, callback, i) {
  i = i || 0;
  let sum = 0;

  if (i < arr.length) {
    let number = arr[i];

    if (callback(number)) {
      sum += number;
    }
    return sum + calcSumElems(arr, callback, ++i);
  }

  return sum;
}

// calcSumElems(array, number => true); // Сумма всех элементов массива
// calcSumElems(array, number => number % 2); // Сумма элементов массива кратных двум
// calcSumElems(array, number => number % 3); // Сумма элементов массива кратных трем
// calcSumElems(array, number => number > 0 && number % 2 !== 0); // Сумма элементов массива положительных и нечетных

// Task 10 ---------

function calcQuantityDigits(arr, callback, isFlag, i) {
  isFlag = isFlag || false; //Флаг на проверку простых чисел
  i = i || 0;

  let quantity = 0;

  if (i < arr.length) {
    let isPrime = true;
    let number = arr[i];

    if (isFlag) {
      (function isPrimeNumber(j) {
        j = j || 2;

        if (j < number) {
          if (number % j === 0) {
            isPrime = false;

            return;
          }

          isPrimeNumber(++j);
        }
      })();
    }

    if (callback(number, isPrime)) {
      quantity++;
    }

    return quantity + calcQuantityDigits(arr, callback, isFlag, ++i);
  }

  return quantity;
}

// calcQuantityDigits(array, (number, isPrime) => isPrime && number > 1, true); //Количество простых чисел в массиве
// calcQuantityDigits(array, number => number === 0); //Количество нулей в массиве
// calcQuantityDigits(array, number => number < 0); //Количество отрицательных элементов в массиве
// calcQuantityDigits(array, number => number > 0); //Количество положительных элементов в массиве

// Task 11 ---------

function convertDecimalToBinary(number, array, div) {
  div = div || number;
  array = array || [];

  array.push(div % 2);

  if (div > 1) {
    div = parseInt(div / 2);

    return convertDecimalToBinary(number, array, div);
  } else {
    array = Number(array.reverse().join(''));

    return array;
  }
}

function convertBinaryToDecimal(number, array, index) {
  array = array || convertNumberToArray(number);
  index = index || 0;
  let result = 0;

  if (index < array.length) {
    const digit = array[index];

    result += digit * 2 ** (array.length - 1 - index);

    return result + convertBinaryToDecimal(number, array, ++index);
  } else {
    return result;
  }
}

// Task 12 ---------

function calcSumNumbers(arr, callback, i, j) {
  i = i || 0;
  j = j || 0;
  let sum = 0;

  if (i < arr.length) {
    if (j < arr[i].length) {
      let number = arr[i][j];

      if (callback(number)) {
        sum += number;
      }

      return sum + calcSumNumbers(arr, callback, i, ++j);
    }
    return sum + calcSumNumbers(arr, callback, ++i);
  }

  return sum;
}

function calcQuantityNumbers(arr, callback, isFlag, i, j) {
  isFlag = isFlag || false; //Флаг на проверку простых чисел
  i = i || 0;
  j = j || 0;
  let quantity = 0;

  if (i < arr.length) {
    if (j < arr[i].length) {
      let number = arr[i][j];

      if (isFlag) {
        (function isPrimeNumber(k) {
          k = k || 2;

          if (k < number) {
            if (number % k === 0) {
              isPrime = false;

              return;
            }

            isPrimeNumber(++k);
          }
        })();
      }

      if (callback(number)) {
        quantity++;
      }

      return quantity + calcQuantityNumbers(arr, callback, isFlag, i, ++j);
    }
    return quantity + calcQuantityNumbers(arr, callback, isFlag, ++i);
  }

  return quantity;
}

// Сумма элементов
// calcSumNumbers(array, number => true); // Сумма всех элементов массива
// calcSumNumbers(array, number => number % 2); // Сумма элементов массива кратных двум
// calcSumNumbers(array, number => number % 3); // Сумма элементов массива кратных трем
// calcSumNumbers(array, number => number > 0 && number % 2 !== 0); // Сумма элементов массива положительных и нечетных

// Количество элементов
// calcQuantityNumbers(array, number => number === 0); //Количество нулей в массиве
// calcQuantityNumbers(array, number => number < 0); //Количество отрицательных элементов в массиве
// calcQuantityNumbers(array, number => number > 0); //Количество положительных элементов в массиве
// calcQuantityNumbers(array, (number, isPrime) => isPrime && number > 1, true); //Количество простых чисел в массиве

// Task 13 ---------

function calcSumElem(min, max, callback, i) {
  i = i || min;
  let sum = 0;

  if (i <= max) {
    if (callback(i)) {
      sum += i;
    }

    return sum + calcSumElem(min, max, callback, ++i);
  }

  return sum;
}

// calcSumElem(-5, 20, item => item % 3 === 0); //Сумма чисел кратных трем в диапазоне от min до max
// calcSumElem(-5, 20, item => item > 0); //Сумма положительных чисел в диапазоне от min до max
// calcSumElem(-5, 20, item => true); //Сумма всех чисел в диапазоне от min до max

// Task 14 ---------

function calcMeanValue(arr, i) {
  i = i || 0;
  const arrayOfNumbers = arr.flat();
  let result = 0;
  let sum = 0;

  if (i < arrayOfNumbers.length) {
    const number = arrayOfNumbers[i];

    sum += number;

    return sum + calcMeanValue(arr, ++i);
  }

  result = parseInt(sum / arrayOfNumbers.length);

  return result;
}

// Task 15 ---------

function matrixTranspotion(matrix, matrixT, i, j, k) {
  i = i || 0;
  j = j || 0;
  k = k || 0;

  matrixT = matrixT || [];

  if (i < matrix.length) {
    matrixT.push([]);

    return matrixTranspotion(matrix, matrixT, ++i);
  }

  if (j < matrix.length && i === matrix.length) {
    if (k < matrix[j].length) {
      matrixT[k].push(matrix[j][k]);

      return matrixTranspotion(matrix, matrixT, i, j, ++k);
    }
    return matrixTranspotion(matrix, matrixT, i, ++j);
  }

  return matrixT;
}

// Task 16 ---------

function matrixAddition(matrix1, matrix2, result, i, j, k) {
  i = i || 0;
  j = j || 0;
  k = k || 0;
  result = result || [];

  if (i < matrix1.length) {
    result.push([]);

    return matrixAddition(matrix1, matrix2, result, ++i);
  }

  if (j < matrix1.length && i === matrix1.length) {
    if (k < matrix1[j].length) {
      const number = matrix1[j][k] + matrix2[j][k];

      result[j].push(number);

      return matrixAddition(matrix1, matrix2, result, i, j, ++k);
    }
    return matrixAddition(matrix1, matrix2, result, i, ++j);
  }

  return result;
}

// Task 17 ---------

function deleteRowWithZero(array, result, indexes, i, j) {
  result = result || array;
  indexes = indexes || [];
  i = i || 0;
  j = j || 0;

  if (i < array.length) {
    if (array[i].includes(0)) {
      const index = i;

      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }
    return deleteRowWithZero(array, result, indexes, ++i);
  }

  if (j === 0 && i === array.length) {
    indexes.reverse();
  }

  if (j < indexes.length && i >= array.length) {
    result.splice(indexes[j], 1);

    return deleteRowWithZero(array, result, indexes, i, ++j);
  }

  return result;
}

function deleteColumnWithZero(array, result, indexes, i, j, k, l) {
  result = result || array;
  indexes = indexes || [];
  i = i || 0;
  j = j || 0;
  k = k || 0;
  l = l || 0;

  if (i < array.length) {
    if (j < array[i].length) {
      if (array[j][i] === 0) {
        const index = i;

        if (!indexes.includes(index)) {
          indexes.push(index);
        }
      }
      return deleteColumnWithZero(array, result, indexes, i, ++j);
    }
    return deleteColumnWithZero(array, result, indexes, ++i);
  }

  if (k < indexes.length && i === array.length) {
    if (k === 0 && l === 0) {
      indexes.reverse();
    }
    if (l < array.length) {
      result[l].splice(indexes[k], 1);

      return deleteColumnWithZero(array, result, indexes, i, j, k, ++l);
    }
    return deleteColumnWithZero(array, result, indexes, i, j, ++k);
  }

  return result;
}

// ==========17 без рекурс
function deleteRowWithZero(array) {
  let result = array;
  let indexes = [];

  // Нахождение индекса строк где есть 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(0)) {
      const index = i;

      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }
  }

  indexes.reverse(); // Для удаления строки с конца

  for (let j = 0; j < indexes.length; j++) {
    result.splice(indexes[j], 1);
  }

  return result;
}
