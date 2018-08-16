import introNode from '../blocks/intro.js';

export const appendNodeToMain = (node) => {
  const documentMainNode = document.querySelector(`#main`);
  const switchToIntroScreenBtn = node.querySelector(`.back`);

  // Удаляет содержимое documentMainNode и добавляет новый темплейт
  documentMainNode.innerHTML = ``;
  documentMainNode.appendChild(node);

  // Если в добавляемой ноде есть кнопка `.back` - вешаем на нее возврат на intro.js по клику
  if (switchToIntroScreenBtn) {
    switchToIntroScreenBtn.addEventListener(`click`, () => {
      appendNodeToMain(introNode);
    });
  }
};
