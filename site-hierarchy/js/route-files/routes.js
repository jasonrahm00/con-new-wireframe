angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('about', {
      url: '/about',
      templateUrl: '/pages/main-nav/about.html',
      data: {
        title: 'About the CU College of Nursing',
        breadcrumb: 'About'
      }
    })
    .state('student-life', {
      url: '/student-life',
      templateUrl: '/pages/main-nav/student-life.html',
      data: {
        title: 'Life at CU College of Nursing',
        breadcrumb: 'Student Life'
      }
    })
    .state('clinics', {
      url: '/clinics',
      templateUrl: '/pages/main-nav/clinics.html',
      data: {
        title: 'CU College of Nursing Clinics',
        breadcrumb: 'Clinics'
      }
    })
    .state('clinical-practice', {
      url: '/clinical-practice',
      templateUrl: '/pages/main-nav/clinical-practice.html',
      data: {
        title: 'CU College of Nursing Clinical Practice',
        breadcrumb: 'Clinical Practice'
      }
    })
    .state('faculty-research', {
      url: '/faculty-research',
      templateUrl: '/pages/main-nav/faculty-research.html',
      data: {
        title: 'Faculty and Research at CU College of Nursing',
        breadcrumb: 'Faculty Research'
      }
    })
  .state('alumni-resources', {
      url: '/alumni-resources',
      templateUrl: '/pages/ankle-nav/alumni-resources.html',
      data: {
        title: 'Alumni Resources at CU College of Nursing',
        breadcrumb: 'Alumni Resources'
      }
    })
  .state('student-resources', {
      url: '/student-resources',
      templateUrl: '/pages/ankle-nav/student-resources.html',
      data: {
        title: 'Student Resources at CU College of Nursing',
        breadcrumb: 'Student Resources'
      }
    })
  .state('staff-resources', {
      url: '/staff-resources',
      templateUrl: '/pages/ankle-nav/staff-resources.html',
      data: {
        title: 'Staff Resources at CU College of Nursing',
        breadcrumb: 'Staff Resources'
      }
    })
  .state('faculty-resources', {
      url: '/faculty-resources',
      templateUrl: '/pages/ankle-nav/faculty-resources.html',
      data: {
        title: 'Faculty Resources at CU College of Nursing',
        breadcrumb: 'Faculty Resources'
      }
    });
          
});