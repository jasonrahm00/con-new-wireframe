angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('programs', {
      url: '/programs',
      templateUrl: '/pages/programs/all-programs.html',
      data: {
        title: 'CU College of Nursing Programs'
      },
      controller: 'programCtrl'
    })
    .state('degrees', {
      url: '/programs/degrees',
      templateUrl: '/pages/programs/degrees.html',
      data: {
        title: 'CU College of Nursing Degrees'
      },
      controller: 'programCtrl'
    })
    .state('degree-page', {
        url: '/programs/degree-page',
        templateUrl: '/pages/programs/degree-page.html',
        data: {
          title: 'CU College of Nursing Single Degree'
        },
        controller: 'programCtrl'
      });
          
});