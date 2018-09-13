import AbstractView from "./abstract-view.js";

export default class GameDoubleView extends AbstractView {
  constructor(data, statsTemplate) {
    super();
    this.data = data;
    this.statsTemplate = statsTemplate;
  }

  get template() {
    return `
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
  }

  onAnswer() {
  }

  bind() {
    const form = this.element.querySelector(`form`);
    const inputs = form.querySelectorAll(`input`);
    const checkFormInputs = (evt) => {
      if ([...inputs].filter((el) => el.checked).length === 2) {
        this.onAnswer(evt);
      }
    };
    form.addEventListener(`click`, checkFormInputs);
  }
}
