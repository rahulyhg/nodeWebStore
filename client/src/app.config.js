Routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function Routing ($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/app/login');

  $stateProvider
      .state('app', {
        url: '/app',
        template: require('./app.html')
      })
      .state('login', {
        parent: 'app',
        url: '/login',
        template: require('./pages/login/login.html')
      })
}
