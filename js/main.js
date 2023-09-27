//списки имён, описаний и комментариев
const NAMES = [
  'Алеша Попович',
  'Виктор Самойлов',
  'Артур Пирожков',
  'Иван Обрамов',
  'Иван Охлабыстин',
  'Клава Кока',
  'Игорь Крутой',
  'Иннокентий Кашинский',
  'Лолита Милявская',
];

const DESCRIPTIONS_PHOTO = [
  'Унылая беспечность',
  'Красота и восторг',
  'Любо дорого смотреть',
  'Дело в ньюансах',
  'Нанавижу этот стиль',
  'Делоть было нечего, дело было вечером',
  'Ужасный восторг',
  'Пятое чудо света',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAX_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MAX_AVATAR_NUMBER = 6;

//Подготовка массива для хранения фотографий
const photos = [];

//Функция генерации случайных целых чисел
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const higher = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (higher - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для выбора случайного элемента из массива.
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];



//Генерация данных для каждой фотографии.
for (let i = 0; i < MAX_PHOTOS; i++) {

  //Внутри цикла создаем объект фотографии
  const id = i + 1;
  const url = `photos/${id}.jpg`;
  const description = getRandomArrayElement(DESCRIPTION_PHOTO);
  const likes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const numberOfComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comments = [];


for (let j = 0; j < numberOfComments; j++) {
  //Создание отдельного комментария.
const comment = {
  id: j + 1,
  avatar:`img/avatar-${getRandomInteger(1,MAX_AVATAR_NUMBER)}.svg` ,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
};
comments.push(comment);

}

//Создание объекта фотографии и добавление его в массив.
const photo = {
  id,
  url,
  description,
  likes,
  comments,
};

photos.push(photo);
}

console.log(photos);


