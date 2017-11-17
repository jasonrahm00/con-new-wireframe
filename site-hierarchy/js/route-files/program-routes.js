angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('programs', {
      url: '/programs',
      templateUrl: '/pages/programs/programs-landing.html',
      data: {
        title: 'CU College of Nursing Programs',
        breadcrumb: 'Programs'
      },
      controller: 'programCtrl'
    })
    .state('degrees', {
      url: '/programs/degrees',
      templateUrl: '/pages/programs/degree-level.html',
      data: {
        title: 'CU College of Nursing Degrees',
        breadcrumb: 'Degrees'
      },
      controller: 'programCtrl'
    })
    .state('degree-page', {
      url: '/programs/degrees/degree-page',
      templateUrl: '/pages/programs/degree-page.html',
      data: {
        title: 'CU College of Nursing Single Degree',
        breadcrumb: 'Degree Page'
      },
      controller: 'programCtrl'
    })
    .state('global-health', {
      url: '/programs/global-health',
      templateUrl: '/pages/programs/global-health.html',
      data: {
        title: 'Global Health Nursing Programs',
        breadcrumb: 'Global Health'
      },
      controller: 'programCtrl'
    });
          
});