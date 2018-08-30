/*
 Может стоит записать statsListItems в changeLevel.js/INITIAL_GAME ?
 еще нужно написать функцию которая будет визуально изменять statsListItems при смене
 уровней и сохранять информацию об ответах, но я не понимаю как организовать взаимодействие

 В задании сказано, что нужно показать все 10 игровых экранов,
 значит нужно закольцевать отображение имеющихся 3 экранов?
*/
const GAME_SCREENS_COUNT = 10;
const statsResultMap = {
  correct: `<li class="stats__result stats__result--correct"></li>`,
  fast: `<li class="stats__result stats__result--fast"></li>`,
  slow: `<li class="stats__result stats__result--slow"></li>`,
  wrong: `<li class="stats__result stats__result--wrong"></li>`,
  unknown: `<li class="stats__result stats__result--unknown"></li>`,
};

const statsListItems = [];
for (let i = 0; i < GAME_SCREENS_COUNT; i++) {
  statsListItems.push(statsResultMap.unknown);
}

export default statsListItems;
