import routing from './app.config';

export default angular.module('app', ['ui.router'])
  .config(routing)
  .name;
