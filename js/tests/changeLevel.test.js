// import {assert} from 'chai';
// import GameModel from '../model/game-model.js';
// import GameScreen from '../controller/game-screen.js';

// const model = new GameModel(`me`);
// const gameScreen = new GameScreen(model);

// describe(`changeLevel()`, () => {
//   describe(`Check Level Changer`, () => {
//     it(`should update game level`, () => {
//       assert.equal(1, gameScreen.changeLevel(model._state, 1).level);
//       assert.equal(4, gameScreen.changeLevel(model._state, 4).level);
//       assert.equal(99, gameScreen.changeLevel(model._state, 99).level);
//     });
//   });
//   describe(`Check Initial Game Status`, () => {
//     it(`Game Starts With 3 lives, level 0, 30000 time`, () => {
//       assert.equal(0, model._state.level);
//       assert.equal(3, model._state.lives);
//       assert.equal(30, model._state.time);
//     });
//   });
//   it(`should not accept strings as argument`, () => {
//     assert.throws(() => gameScreen.changeLevel(model._state, `hello`).level, `Level should be of type number`);
//     assert.throws(() => gameScreen.changeLevel(model._state, `hel${5 + 5}lo`).level, `Level should be of type number`);
//   });
//   it(`should not accept negative values`, () => {
//     assert.throws(() => gameScreen.changeLevel(model._state, -5).level, `Level should not be a negative value`);
//   });
// });
