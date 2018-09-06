const createNodeFromTemplate = (template) => {
  const newNode = document.createElement(`div`);
  newNode.innerHTML = template;
  return newNode;
};

export default createNodeFromTemplate;
