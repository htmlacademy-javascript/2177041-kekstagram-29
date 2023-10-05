import {NAMES,DESCRIPTIONS_PHOTO, COMMENTS, MAX_PHOTOS,MIN_LIKES,MAX_LIKES,MIN_COMMENTS,MAX_COMMENTS,MAX_AVATAR_NUMBER} from './data.js';
import {getRandomArrayElement,getRandomInteger} from './util.js';

//Генерация данных для каждой фотографии.
const generateData = ()=> {
//Подготовка массива для хранения фотографий
const photos = [];
for (let i = 0; i < MAX_PHOTOS; i++) {

  //Внутри цикла создаем объект фотографии
  const id = i + 1;
  const url = `photos/${id}.jpg`;
  const description = getRandomArrayElement(DESCRIPTIONS_PHOTO);
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
  return photos;
}

export {generateData};
