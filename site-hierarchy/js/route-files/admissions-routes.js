angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('admissions', {
      url: '/admissions',
      templateUrl: '/pages/admissions/admissions-landing.html',
      data: {
        title: 'Admissions',
        breadcrumb: 'Home > Admissions'
      }
    })
  .state('program-admissions', {
      url: '/admissions/program-level/program-admissions',
      templateUrl: '/pages/admissions/program-admissions.html',
      data: {
        title: 'Program Admissions',
        breadcrumb: 'Home > Admissions > Program Admissions Landing'
      }
    })
  .state('specialty-required-admissions', {
      url: '/admissions/program-level/specialty-required-admissions',
      templateUrl: '/pages/admissions/specialty-required.html',
      data: {
        title: 'Program Admissions',
        breadcrumb: 'Home > Admissions > Program Admissions Landing (Specialty Required)'
      }
    })
  .state('info-sessions', {
      url: '/admissions/information-sessions',
      templateUrl: '/pages/admissions/info-sessions.html',
      data: {
        title: 'Program Admissions',
        breadcrumb: 'Home > Admissions > Information Sessions'
      }
    });
  
});