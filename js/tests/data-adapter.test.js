// import { assert } from 'chai';

// const serverData = {
//   "type": "two-of-two",
//   "question": "Угадайте для каждого изображения фото или рисунок?",
//   "answers": [{
//     "image": {
//       "url": "https://k39.kn3.net/E07A38605.jpg",
//       "width": 468,
//       "height": 458
//     },
//     "type": "painting"
//   }, {
//     "image": {
//       "url": "https://k38.kn3.net/20B8A2B58.jpg",
//       "width": 468,
//       "height": 458
//     },
//     "type": "painting"
//   }]
// };

// const localData = {
//   level: 0,
//   type: `doubleQuestion`,
//   task: `Угадайте для каждого изображения фото или рисунок?`,
//   options: [{
//     alt: `Option 1`,
//     src: `https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg`,
//     inputName: `question1`,
//     answer: `paint`
//   }, {
//     alt: `Option 2`,
//     src: `https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350`,
//     inputName: `question2`,
//     answer: `photo`
//   }]
// };

// describe(`Adapt server data`, () => {
//   it(`should have several format remote and local data`, () => {
//     assert.deepEqual(localData, serverData);
//   });
// });
