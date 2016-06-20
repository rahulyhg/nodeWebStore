import app from './src/app';

console.log(app);

angular.module('boot', [
  app,
  'ui.router'
]);

