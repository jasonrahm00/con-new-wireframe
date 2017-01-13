angular.module('conWireframe', ['ui.router']);

angular.module('conWireframe').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
  })
});

//ROUTES
angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('home', {
        url: '/',
        templateUrl: '../pages/home.html',
        data: {
          title: 'CON Wireframe'
        }
      });
  
//    .state('ledger', {
//      url: '/',
//      templateUrl: 'budget/views/ledger.html',
//      controller: 'ledgerCtrl'
//    })
//    .state('report', {
//      url: '/report',
//      templateUrl: 'budget/views/report.html',
//      controller: 'reportCtrl'
//    });
  
  $urlRouterProvider.otherwise('/');
  
});
