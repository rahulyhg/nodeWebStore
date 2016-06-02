import angular from 'angular';
import uirouter from "angular-ui-router";

import 'bootstrap/dist/css/bootstrap.css';

import store from './app/store';
import routing from './store.config';


angular.module('app', [uirouter, store])
    .config(routing);


angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
