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
  .state('grad-admissions', {
      url: '/admissions/graduate-admissions',
      templateUrl: '/pages/admissions/grad-admissions.html',
      data: {
        title: 'Graduate Program Admissions',
        breadcrumb: 'Home > Admissions > Graduate Admissions'
      },
      controller: 'admissionsCtrl'
    })
  .state('undergrad-admissions', {
      url: '/admissions/undergraduate-admissions',
      templateUrl: '/pages/admissions/undergrad-admissions.html',
      data: {
        title: 'Undergraduate Program Admissions',
        breadcrumb: 'Home > Admissions > Undergraduate Admissions'
      },
      controller: 'admissionsCtrl'
    })
  .state('international-admissions', {
      url: '/admissions/international-admissions',
      templateUrl: '/pages/admissions/international-admissions.html',
      data: {
        title: 'International Student Admissions',
        breadcrumb: 'Home > Admissions > International Student Admissions'
      },
      controller: 'admissionsCtrl'
    })
  .state('program-admissions', {
      url: '/admissions/program-level/program-admissions',
      templateUrl: '/pages/admissions/program-admissions.html',
      data: {
        title: 'Program Admissions',
        breadcrumb: 'Home > Admissions > Program Admissions Landing'
      },
      controller: 'admissionsCtrl'
    })
  .state('nondegree-admissions', {
      url: '/admissions/non-degree-admissions',
      templateUrl: '/pages/admissions/non-degree-admissions.html',
      data: {
        title: 'Non-Degree Program Admissions',
        breadcrumb: 'Home > Admissions > Non-Degree Program Admissions'
      },
      controller: 'admissionsCtrl'
    })
  .state('grad-certificate-admissions', {
      url: '/admissions/program-level/grad-certificate-admissions',
      templateUrl: '/pages/admissions/grad-certificate-admissions.html',
      data: {
        title: 'Graduate Certificate Admissions',
        breadcrumb: 'Home > Admissions > Graduate Certificate Admissions'
      },
      controller: 'admissionsCtrl'
    });
  
});