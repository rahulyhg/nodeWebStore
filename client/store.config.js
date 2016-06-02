routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default function routing ($stateProvider, $locationProvider, $urlRouterProvider) {
  'use strict';
  'ngInject';

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $urlRouterProvider.otherwise('main');

  $stateProvider
      .state('main', {
        url:'/app',
        template:'<h1>qwevqwq</h1>',
        // abstract:true
      })
      .state('profile', {
        // templateUrl:'./pa'
      })
      .state('home', {
        // templateUrl:
      })
      .state('login', {
        parent:'app',
        url:'/login',
        template:'<h1>hello body</h1>'
      })



}