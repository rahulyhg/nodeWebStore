import angular from 'angular';
import routing from './app.config';

angular.module('app', [])
    .service(routing)
    .component('asd', {
      template: '<h1>qwe</h1>',
      bindings: {}
    });


angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
