const createNodeFromTemplate = (template) => {
  // Создает новый div с содержанием из темплейта
  const newNode = document.createElement(`div`);
  newNode.innerHTML = template;

  return newNode;
};

export default createNodeFromTemplate;
