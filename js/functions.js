
function isStringLengthValid(str, maxLenght) {
  const isLenghtValid = str.length <= maxLenght;
  return isLenghtValid;
}
isStringLengthValid('test',4);

// Полиндром

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}

isPalindrome('ДовоД');
