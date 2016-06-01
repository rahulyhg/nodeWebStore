routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default function routing ($stateProvider, $locationProvider, $urlRouterProvider) {
  'use strict';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
      .state('login', {
        templateUrl:'./pa'
      })
      .state('main', {})



}