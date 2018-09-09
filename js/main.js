import appendNodeToMain from './utils/append-node.js';
import IntroScreen from './blocks/intro-view.js';

const intro = new IntroScreen();
appendNodeToMain(intro.element);
