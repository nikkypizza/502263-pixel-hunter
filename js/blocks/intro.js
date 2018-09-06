import createNodeFromTemplate from '../utils/create-node.js';
import appendNodeToMain from '../utils/append-node.js';
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
