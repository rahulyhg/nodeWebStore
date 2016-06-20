import app from './src/app';
// import 'bootstrap/dist/css/bootstrap.css';
import './src/assets/main.styl';

console.log(app);

angular.module('boot', [
  app,
  'ui.router'
]);

