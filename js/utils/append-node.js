const appendNodeToMain = (node) => {
  const documentMainNode = document.querySelector(`#main`);
  documentMainNode.innerHTML = ``;
  documentMainNode.appendChild(node);
};

export default appendNodeToMain;
