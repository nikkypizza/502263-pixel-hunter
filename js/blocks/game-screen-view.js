import AbstractView from "./abstract-view.js";

export default class GameScreenView extends AbstractView {
  constructor(data, headerTemplate, statsTemplate) {
    super();
    this.data = data;
    this.headerTemplate = headerTemplate;
    this.statsTemplate = statsTemplate;
    this.GameTypes = {
      SINGLE: `singleQuestion`,
      DOUBLE: `doubleQuestion`,
      TRIPLE: `tripleQuestion`
    };
  }

  get template() {
    let currentGameType = null;
    switch (this.data.type) {
      case this.GameTypes.DOUBLE:
        currentGameType = `
        ${this.headerTemplate}
        <section class="game">
          <p class="game__task">${this.data.task}</p>
          <form class="game__content">
        <div class="game__option">
          <img src="${this.data.options[0].src}" alt="${this.data.options[0].alt}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="${this.data.options[0].inputName}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="${this.data.options[0].inputName}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${this.data.options[1].src}" alt="${this.data.options[1].alt}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="${this.data.options[1].inputName}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="${this.data.options[1].inputName}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
          </form>
          <ul class="stats">
            ${this.statsTemplate}
          </ul>
        </section>`;
        break;

      case this.GameTypes.SINGLE:
        currentGameType = `
        ${this.headerTemplate}
        <section class="game">
          <p class="game__task">${this.data.task}</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <img src="${this.data.options[0].src}" alt="${this.data.options[0].alt}" width="705" height="455">
              <label class="game__answer game__answer--photo">
                <input class="visually-hidden" name="${this.data.options[0].inputName}" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input class="visually-hidden" name="${this.data.options[0].inputName}" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          <ul class="stats">
            ${this.statsTemplate}
          </ul>
        </section>`;
        break;

      case this.GameTypes.TRIPLE:
        currentGameType = `
        ${this.headerTemplate}
        <section class="game">
          <p class="game__task">${this.data.task}</p>
          <form class="game__content  game__content--triple">
        <div class="game__option game__option--selected">
          <img src="${this.data.options[0].src}" alt="${this.data.options[0].alt}" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.data.options[1].src}" alt="${this.data.options[1].alt}" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.data.options[2].src}" alt="${this.data.options[2].alt}" width="304" height="455">
        </div>
          </form>
          <ul class="stats">
            ${this.statsTemplate}
          </ul>
        </section>`;
        break;
    }
    return currentGameType;
  }

  onAnswer() {}

  bind() {
    switch (this.data.type) {
      case this.GameTypes.DOUBLE:
        const gameForm = this.element.querySelector(`form`);
        const gameAnswers = this.element.querySelectorAll(`input`);
        const renderSecondGame = () => {
          if ([...gameAnswers].filter((el) => el.checked).length === 2) {
            this.onAnswer();
          }
        };
        gameForm.addEventListener(`click`, renderSecondGame);
        break;

      case this.GameTypes.SINGLE:
        const allAnswers = this.element.querySelectorAll(`input`);
        allAnswers.forEach((el) => {
          el.addEventListener(`click`, () => {
            this.onAnswer();
          });
        });
        break;

      case this.GameTypes.TRIPLE:
        const gameOptions = this.element.querySelectorAll(`.game__option`);
        gameOptions.forEach((el) => {
          el.addEventListener(`click`, () => {
            this.onAnswer();
          });
        });
        break;
    }
  }
}
