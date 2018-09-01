import introNode from '../blocks/intro.js';

const appendNodeToMain = (node) => {
  const documentMainNode = document.querySelector(`#main`);
  const switchToIntroScreenBtn = node.querySelector(`.back`);

  documentMainNode.innerHTML = ``;
  documentMainNode.appendChild(node);

  if (switchToIntroScreenBtn) {
    switchToIntroScreenBtn.addEventListener(`click`, () => {
      appendNodeToMain(introNode);
    });
  }
};

export default appendNodeToMain;
