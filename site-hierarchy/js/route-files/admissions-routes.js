angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('admissions', {
      url: '/admissions',
      templateUrl: '/pages/admissions/admissions-landing.html',
      data: {
        title: 'Admissions',
        breadcrumb: 'Home > Admissions'
      },
      controller: 'admissionsCtrl'
    })
  .state('admissions-requirements', {
      url: '/admissions/requirements',
      templateUrl: '/pages/admissions/admissions-requirements.html',
      data: {
        title: 'Admissions Requirements',
        breadcrumb: 'Home > Admissions Requirements'
      },
      controller: 'admissionsCtrl'
    });
  
});