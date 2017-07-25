angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('alumni', {
      url: '/alumni',
      templateUrl: '/pages/alumni/alumni-landing.html',
      data: {
        title: 'College of Nursing Alumni',
        breadcrumb: 'Home > Alumni'
      }
    });
  
});