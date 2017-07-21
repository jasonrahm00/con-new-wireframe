angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('students', {
      url: '/students',
      templateUrl: '/pages/students/students-landing.html',
      data: {
        title: 'College of Nursing Student Life',
        breadcrumb: 'Home > Students'
      }
    })
  .state('clubs-organizations', {
      url: '/students/clubs-organizations',
      templateUrl: '/pages/students/clubs-organizations.html',
      data: {
        title: 'Clubs and Organizations',
        breadcrumb: 'Home > Students > Clubs and Organizations'
      }
    })
  .state('life-in-colorado', {
      url: '/students/life-in-colorado',
      templateUrl: '/pages/students/life-in-colorado.html',
      data: {
        title: 'Life in Colorado',
        breadcrumb: 'Home > Students > Life in Colorado'
      }
    })
  .state('student-ambassadors', {
      url: '/students/student-ambassadors',
      templateUrl: '/pages/students/student-ambassadors.html',
      data: {
        title: 'Student Ambassadors',
        breadcrumb: 'Home > Students > Student Ambassadors'
      }
    });
  
});