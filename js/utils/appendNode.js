export const appendNodeToMain = (node) => {
// Удаляет содержимое documentMainNode и добавляет новый темплейт
  const documentMainNode = document.querySelector(`#main`);

  documentMainNode.innerHTML = ``;
  documentMainNode.appendChild(node);
};
