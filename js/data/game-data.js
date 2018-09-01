const GAME_DATA = [
  {
    level: 0,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `http://placehold.it/468x458`,
      inputName: `question1`,
      answer: `paint`
    },
    {
      alt: `Option 2`,
      src: `http://placehold.it/468x458`,
      inputName: `question2`,
      answer: `photo`
    }
    ]
  },
  {
    level: 1,
    task: `Угадай, фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `http://placehold.it/705x455`,
      inputName: `question1`,
      answer: `paint`
    }]
  },
  {
    level: 2,
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
    ]
  }
];

const GAME_QUESTIONS_COUNT = 10;
const statsAnswerResultMap = {
  correct: `<li class="stats__result stats__result--correct"></li>`,
  fast: `<li class="stats__result stats__result--fast"></li>`,
  slow: `<li class="stats__result stats__result--slow"></li>`,
  wrong: `<li class="stats__result stats__result--wrong"></li>`,
  unknown: `<li class="stats__result stats__result--unknown"></li>`,
};

const defaultStatsListItems = [];
for (let i = 0; i < GAME_QUESTIONS_COUNT; i++) {
  defaultStatsListItems.push(statsAnswerResultMap.unknown);
}

export {GAME_DATA, defaultStatsListItems};
