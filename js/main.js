import appendNodeToMain from './utils/append-node.js';
import IntroScreen from './blocks/intro.js';
import GreetingsScreen from './blocks/greetings.js';

const intro = new IntroScreen();

intro.onClick = () => {
  const greetings = new GreetingsScreen();
  appendNodeToMain(greetings.element);
};

appendNodeToMain(intro.element);
