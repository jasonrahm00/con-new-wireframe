angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('about', {
      url: '/about',
      templateUrl: '/pages/about.html',
      data: {
        title: 'About the CU College of Nursing',
        breadcrumb: 'About'
      }
    })
    .state('student-life', {
      url: '/student-life',
      templateUrl: '/pages/student-life.html',
      data: {
        title: 'Life at CU College of Nursing',
        breadcrumb: 'Student Life'
      }
    })
    .state('clinics', {
      url: '/clinics',
      templateUrl: '/pages/clinics.html',
      data: {
        title: 'CU College of Nursing Clinics',
        breadcrumb: 'Clinics'
      }
    })
    .state('clinical-practice', {
      url: '/clinical-practice',
      templateUrl: '/pages/clinical-practice.html',
      data: {
        title: 'CU College of Nursing Clinical Practice',
        breadcrumb: 'Clinical Practice'
      }
    })
    .state('faculty-research', {
      url: '/faculty-research',
      templateUrl: '/pages/faculty-research.html',
      data: {
        title: 'Faculty and Research at CU College of Nursing',
        breadcrumb: 'Faculty Research'
      }
    });
          
});