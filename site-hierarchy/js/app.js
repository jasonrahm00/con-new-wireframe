angular.module('conWireframe', ['ui.router']);

angular.module('conWireframe').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
  
});

angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  
    .state('home', {
      url: '/',
      templateUrl: '/pages/home.html',
      data: {
        title: 'CON Wireframe'
      }
    });
  $urlRouterProvider.otherwise('/');
  
});