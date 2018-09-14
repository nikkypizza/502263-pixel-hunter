export default class Utils {
  static changeView(node) {
    const documentMainNode = document.querySelector(`#main`);
    documentMainNode.innerHTML = ``;
    documentMainNode.appendChild(node);
  }

  static appendNode(node) {
    const documentMainNode = document.querySelector(`#main`);
    documentMainNode.appendChild(node);
  }

  static removeNode(node) {
    const documentMainNode = document.querySelector(`#main`);
    documentMainNode.removeChild(node);
  }

  static getGameStatisticsNodes(data) {
    const gameStatsArr = [];
    data.forEach((el) => {
      gameStatsArr.push(`<li class="stats__result stats__result--${el}"></li>`);
    });
    return gameStatsArr;
  }
}
