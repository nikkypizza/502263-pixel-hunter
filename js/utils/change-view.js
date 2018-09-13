const documentMainNode = document.querySelector(`#main`);

const changeView = (node) => {
  documentMainNode.innerHTML = ``;
  documentMainNode.appendChild(node);
};

export default changeView;
