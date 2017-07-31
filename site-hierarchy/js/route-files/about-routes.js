angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('about', {
      url: '/about',
      templateUrl: '/pages/about/about-landing.html',
      data: {
        title: 'About the CU College of Nursing',
        breadcrumb: 'Home > About'
      }
    });
  
});