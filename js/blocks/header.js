import AbstractView from "./Abstract";

class HeaderNode extends AbstractView {
  constructor(initialData, state) {
    super();
    this.initialData = initialData;
    this.state = state;
  }

  get template() {
    const heartFullIcon = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
    const heartEmptyIcon = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`;
    const returnButton = `
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>`;

    if (this.initialData && this.state) { // Для игрового экрана в хедер добавляется счетчик и индикатор жизней
      return `
      <header class="header">
        ${returnButton}
        <div class="game__timer">${this.state.time / 1000}</div>
        <div class="game__lives">
          ${new Array(this.initialData.lives - this.state.lives).fill(heartEmptyIcon).join(``)}
          ${new Array(this.state.lives).fill(heartFullIcon).join(``)}
        </div>
      </header>`;
    }

    return `
    <header class="header">
      ${returnButton}
    </header>`;
  }

  onClick() {}

  bind() {
    const returnButton = this.element.querySelector(`.back`);
    returnButton.addEventListener(`click`, () => {
      this.onClick();
    });
  }
}

export default HeaderNode;
