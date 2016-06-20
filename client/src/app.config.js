Routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function Routing ($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/login');

  $stateProvider
      .state('app', {
        url: '/',
        template: require('./app.html')
      })
      .state('login', {
        parent: 'app',
        url: '/login',
        template: require('./components/login/login.html')
      })
}
