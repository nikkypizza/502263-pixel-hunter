import changeView from '../utils/change-view.js';
import IntroView from '../views/intro-view.js';
import GreetingsView from '../views/greetings-view.js';
import HeaderView from '../views/header-view.js';
import RulesView from '../views/rules-view.js';
import GameScreen from './game-screen.js';
import GameModel from '../model/game-model.js';

const screenContainer = document.createElement(`div`);

export default class Application {
  static showIntro() {
    const intro = new IntroView();
    changeView(intro.element);
  }

  static showGreetings() {
    const greetings = new GreetingsView();
    changeView(greetings.element);
  }

  static showRules() {
    const header = new HeaderView();
    const rules = new RulesView();

    screenContainer.innerHTML = ``;
    screenContainer.appendChild(header.element);
    screenContainer.appendChild(rules.element);
    changeView(screenContainer);
  }

  static showGame(userName) {
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
  }
}
