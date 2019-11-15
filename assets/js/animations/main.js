import App from './core/app.js';

const app = new App();
window.app = app;
const resize = () => {
  app.resize();
};

window.onresize = resize;


const scroll = () => {
  app.scroll();
  toggleHeader();
};

// UPDATE ----------------------------------------------------------------------
const update = () => {
  app.update();
  window.requestAnimationFrame(update);
};


