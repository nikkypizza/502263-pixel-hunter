import AbstractView from "./abstract-view.js";

export default class HeaderView extends AbstractView {
  constructor(initialState, currentState) {
    super();
    this.initialState = initialState;
    this.currentState = currentState;
  }

  get template() {
    const heartFullIcon = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
    const heartEmptyIcon = `<img src="img/heart__empty.svg" class="game__heart" alt="Missed Life" width="31" height="27">`;

    if (this.initialState && this.currentState) { // Для игрового экрана в хедер добавляется счетчик и индикатор жизней
      return `
      <header class="header">
        <button class="back">
          <span class="visually-hidden">Вернуться к началу</span>
          <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
            <use xlink:href="img/sprite.svg#arrow-left"></use>
          </svg>
          <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
            <use xlink:href="img/sprite.svg#logo-small"></use>
          </svg>
        </button>
        <div class="game__timer">${this.currentState.time / 1000}</div>
        <div class="game__lives">
          ${new Array(this.initialState.lives - this.currentState.lives).fill(heartEmptyIcon).join(``)}
          ${new Array(this.currentState.lives).fill(heartFullIcon).join(``)}
        </div>
      </header>`;
    }
    return `
    <header class="header">
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>
    </header>`;
  }

  onClick() {}

  bind() {
    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onClick();
    });
  }
}
