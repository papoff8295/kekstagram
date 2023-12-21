// eslint-disable-next-line no-unused-vars
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// eslint-disable-next-line no-unused-vars
const checkLengthString = (inputString, maxlength) => {
  return inputString.length <= maxlength;
};

// eslint-disable-next-line no-unused-vars
let getPhotos = function () {
  const photos = []
  for (let i = 0; i < 25; i ++) {
    let photo = {
      id: i,
      url: "photos/" + i + ".jpg",
      description: 'photo${i}',
      likes: getRandomPositiveInteger(15, 200),
      comments: getComments()
    }
    photos.push(photo)
  }
  return photos
}

let getComments = function () {
  let messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
  ]
  let names = ["Vasia", "Petia", "Slavic", "Vovic", "Dimon", "Kuzia"]
  const comments = []

  let ids = []
  for (let i = 0; i < 6; i++) {
    let id = getRandomPositiveInteger(1, 100)
    while (ids.includes(id)) {
      id = getRandomPositiveInteger(1, 100)
    }
    ids.push(id)

    let comment = {
      id: id,
      avatar: "img/avatar-${i}.svg",
      message: messages[i],
      name: names[i]
    }
    comments.push(comment)
  }
  return comments
}

