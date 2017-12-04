angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('programs', {
      url: '/programs',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/programs.html',
      data: {
        title: 'CU College of Nursing Programs',
        breadcrumb: 'Programs'
      },
      controller: 'programCtrl'
    })
    .state('degree-page', {
      url: '/programs/degree-page',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/degree-page.html',
      data: {
        title: 'CU College of Nursing Single Degree',
        breadcrumb: 'Degree Page',
        image: 'con-oit-wireframe/images/hero-image.jpg'
      },
      controller: 'programCtrl'
    })
    .state('global-health', {
      url: '/programs/global-health',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/global-health.html',
      data: {
        title: 'Global Health Nursing Programs',
        breadcrumb: 'Global Health'
      },
      controller: 'programCtrl'
    });
          
});