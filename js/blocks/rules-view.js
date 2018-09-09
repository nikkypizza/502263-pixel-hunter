import AbstractView from "./abstract-view.js";

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class="rules">
      <h2 class="rules__title">Правила</h2>
      <ul class="rules__description">
        <li>Угадай 10 раз для каждого изображения фото
          <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
          <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
        <li>Фотографиями или рисунками могут быть оба изображения.</li>
        <li>На каждую попытку отводится 30 секунд.</li>
        <li>Ошибиться можно не более 3 раз.</li>
      </ul>
      <p class="rules__ready">Готовы?</p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </section>`;
  }

  onSubmit() {
  }

  bind() {
    const form = this.element.querySelector(`.rules__form`);
    const input = form.querySelector(`.rules__input`);
    const submitBtn = form.querySelector(`.rules__button`);

    form.addEventListener(`submit`, () => {
      form.reset();
      this.onSubmit();
    });

    // Кнопка активна, если инпут не пуст
    input.addEventListener(`input`, () => {
      submitBtn.disabled = input.value.length === 0;
    });
  }
}
