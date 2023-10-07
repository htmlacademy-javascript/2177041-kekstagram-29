//Функция генерации случайных целых чисел
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const higher = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (higher - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для выбора случайного элемента из массива.
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement,getRandomInteger};
