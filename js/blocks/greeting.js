import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import rulesNode from './rules.js';

const greetingsScreenData = {
  title: `Лучшие художники-фотореалисты бросают тебе вызов!`,
  subtitle: `Правила игры просты:`,
  description: new Set([
    `Нужно отличить рисунок от фотографии и сделать выбор.`,
    `Задача кажется тривиальной, но не думай, что все так просто.`,
    `Фотореализм обманчив и коварен.`,
    `Помни, главное — смотреть очень внимательно.`
  ])
};

const greetingTemplate = `
  <section class="greeting central--blur">
    <img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
    <div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*</div>
    <div class="greeting__challenge">
      <h3 class="greeting__challenge-title">${greetingsScreenData.title}</h3>
      <p class="greeting__challenge-text">${greetingsScreenData.subtitle}</p>
      <ul class="greeting__challenge-list">
        ${[...greetingsScreenData.description].map((it) => `<li>${it}</li>`).join(``)}
      </ul>
    </div>
    <button class="greeting__continue" type="button">
      <span class="visually-hidden">Продолжить</span>
      <svg class="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </section>`;

const greetingNode = createNodeFromTemplate(greetingTemplate);
const greetingArrowNode = greetingNode.querySelector(`.greeting__continue`);

greetingArrowNode.addEventListener(`click`, () => {
  appendNodeToMain(rulesNode);
});

export default greetingNode;
