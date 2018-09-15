/* eslint-disable */
import { assert } from 'chai';
import adaptServerData from '../data/data-adapter.js';

const serverData = [{
    "type": "two-of-two",
    "question": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [{
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "tinder-like",
    "question": "Угадай, фото или рисунок?",
    "answers": [{
      "image": {
        "url": "http://placehold.it/705x455",
        "width": 705,
        "height": 455
      },
      "type": "photo"
    }]
  },
  {
    "type": "one-of-three",
    "question": "Найдите рисунок среди изображений",
    "answers": [{
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      }
    ]
  }
];

const localData = [{
    level: 0,
    type: `doubleQuestion`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{
        alt: `Option 1`,
        src: `http://placehold.it/468x458`,
        answer: `photo`,
        width: 468,
        height: 458
      },
      {
        alt: `Option 2`,
        src: `http://placehold.it/468x458`,
        answer: `paint`,
        width: 468,
        height: 458
      }
    ]
  },
  {
    level: 1,
    type: `singleQuestion`,
    task: `Угадай, фото или рисунок?`,
    options: [{
      alt: `Option 1`,
      src: `http://placehold.it/705x455`,
      answer: `photo`,
      width: 705,
      height: 455
    }]
  },
  {
    level: 2,
    type: `tripleQuestion`,
    task: `Найдите рисунок среди изображений`,
    options: [{
        alt: `Option 1`,
        src: `http://placehold.it/304x455`,
        answer: `photo`,
        width: 304,
        height: 455
      },
      {
        alt: `Option 2`,
        src: `http://placehold.it/304x455`,
        answer: `paint`,
        width: 304,
        height: 455
      },
      {
        alt: `Option 3`,
        src: `http://placehold.it/304x455`,
        answer: `photo`,
        width: 304,
        height: 455
      }
    ]
  }
];

describe(`Adapt server data`, () => {
  it(`should have same format for answers`, () => {
    assert.equal(adaptServerData(serverData)[0].type, localData[0].type);
    assert.equal(adaptServerData(serverData)[0].level, localData[0].level);
    assert.equal(adaptServerData(serverData)[0].task, localData[0].task);
    assert.equal(adaptServerData(serverData)[1].task, localData[1].task);
    assert.equal(adaptServerData(serverData)[2].task, localData[2].task);
    assert.equal(adaptServerData(serverData)[0].options[0].alt, localData[0].options[0].alt);
    assert.equal(adaptServerData(serverData)[0].options[1].answer, localData[0].options[1].answer);
    assert.equal(adaptServerData(serverData)[0].options[0].src, localData[0].options[0].src);
  });
});
