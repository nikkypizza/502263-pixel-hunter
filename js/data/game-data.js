const GAME_DATA = {
  'gameOne': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `http://placehold.it/468x458`,
      inputName: `question1`,
      answer: `paint` // не знаю как составляются правила игры, пишу образно
    },
    {
      alt: `Option 2`,
      src: `http://placehold.it/468x458`,
      inputName: `question2`,
      answer: `photo`
    }
    ],
    stats: `/?`
  },
  'gameTwo': {
    task: `Угадай, фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `http://placehold.it/705x455`,
      inputName: `question1`,
      answer: `paint`
    }],
    stats: `/?`
  },
  'gameThree': {
    task: `Найдите рисунок среди изображений`,
    options: [{
      alt: `Option 1`,
      src: `http://placehold.it/304x455`,
      answer: `photo`
    },
    {
      alt: `Option 2`,
      src: `http://placehold.it/304x455`,
      answer: `paint`
    },
    {
      alt: `Option 3`,
      src: `http://placehold.it/304x455`,
      answer: `photo`
    }
    ],
    stats: `/?`
  }
};

export default GAME_DATA;
