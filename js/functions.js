function isStringLengthValid(str, maxLenght) {
  let isLenghtValid = str.length <= maxLenght;
  return isLenghtValid;
}
console.log(isStringLengthValid('test', 4))
console.log(isStringLengthValid('test', 3))
console.log(isStringLengthValid('test', 5))
console.log(isStringLengthValid('go', -1))

// Полиндром

function isPalindrome(str) {
  let normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}

// Примеры использования функции
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
