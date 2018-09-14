import AbstractView from "./abstract-view.js";

export default class ModalErrorView extends AbstractView {
  constructor(errorStatus) {
    super();
    this.errorStatus = errorStatus;
  }

  get template() {
    return `
    <section class="modal">
      <div class="modal__inner">
        <h2 class="modal__title">Произошла ошибка!</h2>
        <p class="modal__text modal__text--error">Статус:${this.errorStatus} Пожалуйста, перезагрузите страницу.</p>
      </div>
    </section>`;
  }

  onClick() {
  }

  bind() {
  }
}
