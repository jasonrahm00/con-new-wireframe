angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('programs', {
      url: '/programs',
      templateUrl: '/pages/main-nav/programs/programs.html',
      data: {
        title: 'CU College of Nursing Programs',
        breadcrumb: 'Programs'
      },
      controller: 'programCtrl'
    })
    .state('degrees', {
      url: '/programs/degrees',
      templateUrl: '/pages/main-nav/programs/degrees.html',
      data: {
        title: 'CU College of Nursing Degrees',
        breadcrumb: 'Degrees'
      },
      controller: 'programCtrl'
    })
    .state('degree-page', {
      url: '/programs/degrees/degree-page',
      templateUrl: '/pages/main-nav/programs/degree-page.html',
      data: {
        title: 'CU College of Nursing Single Degree',
        breadcrumb: 'Degree Page',
        image: '/images/hero-image.jpg'
      },
      controller: 'programCtrl'
    })
    .state('global-health', {
      url: '/programs/global-health',
      templateUrl: '/pages/main-nav/programs/global-health.html',
      data: {
        title: 'Global Health Nursing Programs',
        breadcrumb: 'Global Health'
      },
      controller: 'programCtrl'
    });
          
});