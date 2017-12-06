angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('about', {
      url: '/about',
      templateUrl: 'con-oit-wireframe/pages/main-nav/about.html',
      data: {
        title: 'About the CU College of Nursing',
        breadcrumb: 'About',
        image: 'con-oit-wireframe/images/about.jpg',
        imgAlt: 'Exterior of the Ed2 North building on the Anschutz Medical Campus'
      }
    })
    .state('student-life', {
      url: '/student-life',
      templateUrl: 'con-oit-wireframe/pages/main-nav/student-life.html',
      data: {
        title: 'Life at CU College of Nursing',
        breadcrumb: 'Student Life'
      }
    })
    .state('clinics', {
      url: '/clinics',
      templateUrl: 'con-oit-wireframe/pages/main-nav/clinics.html',
      data: {
        title: 'CU College of Nursing Clinics',
        breadcrumb: 'Clinics'
      }
    })
    .state('clinical-practice', {
      url: '/clinical-practice',
      templateUrl: 'con-oit-wireframe/pages/main-nav/clinical-practice.html',
      data: {
        title: 'CU College of Nursing Clinical Practice',
        breadcrumb: 'Clinical Practice'
      }
    })
    .state('faculty-research', {
      url: '/faculty-research',
      templateUrl: 'con-oit-wireframe/pages/main-nav/faculty-research.html',
      data: {
        title: 'Faculty and Research at CU College of Nursing',
        breadcrumb: 'Faculty Research'
      }
    })
  .state('alumni-resources', {
      url: '/alumni-resources',
      templateUrl: 'con-oit-wireframe/pages/ankle-nav/alumni-resources.html',
      data: {
        title: 'Alumni Resources at CU College of Nursing',
        breadcrumb: 'Alumni Resources'
      }
    })
  .state('student-resources', {
      url: '/student-resources',
      templateUrl: 'con-oit-wireframe/pages/ankle-nav/student-resources.html',
      data: {
        title: 'Student Resources at CU College of Nursing',
        breadcrumb: 'Student Resources'
      }
    })
  .state('faculty-staff', {
      url: '/faculty-staff-resources',
      templateUrl: 'con-oit-wireframe/pages/ankle-nav/faculty-staff.html',
      data: {
        title: 'Faculty Resources at CU College of Nursing',
        breadcrumb: 'Faculty & Staff Resources'
      }
    });
          
});