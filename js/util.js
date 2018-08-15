export const createElementFromTemplate = (template) => {
  const domElement = document.createElement(`div`);
  domElement.innerHTML = template;
  return domElement;
};
