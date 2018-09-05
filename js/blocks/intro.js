import createNodeFromTemplate from '../utils/createNode.js';
import appendNodeToMain from '../utils/appendNode.js';
import greetingNode from './greeting.js';

const introDescription = `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`;

const introTemplate = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup>${introDescription}</p>
  </section>`;

const introNode = createNodeFromTemplate(introTemplate);
const asteriskNode = introNode.querySelector(`.asterisk`);

asteriskNode.addEventListener(`click`, () => {
  appendNodeToMain(greetingNode);
});

export default introNode;
