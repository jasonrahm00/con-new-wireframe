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
  .state('student-ambassadors', {
      url: '/students/student-ambassadors',
      templateUrl: '/pages/students/student-ambassadors.html',
      data: {
        title: 'Student Ambassadors',
        breadcrumb: 'Home > Students > Student Ambassadors'
      }
    });
  
});