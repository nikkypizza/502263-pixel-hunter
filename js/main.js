import appendNodeToMain from './utils/append-node.js';
import IntroScreen from './blocks/intro.js';

const intro = new IntroScreen();
intro.onClick = () => {
  // console.log(`42`);
};

appendNodeToMain(intro.element);
