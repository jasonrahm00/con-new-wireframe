angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('about', {
      url: '/about',
      templateUrl: '/pages/generic.html',
      data: {
        title: 'About the CU College of Nursing',
        h1: "About Us"
      }
    }).state('student-life', {
      url: '/student-life',
      templateUrl: '/pages/generic.html',
      data: {
        title: 'Life at CU College of Nursing',
        h1: 'Student Life'
      }
    }).state('programs', {
      url: '/programs',
      templateUrl: '/pages/generic.html',
      data: {
        title: 'CU College of Nursing Programs',
        h1: 'Nursing Programs'
      }
    }).state('clinics', {
      url: '/clinics',
      templateUrl: '/pages/generic.html',
      data: {
        title: '/pages/generic.html',
        h1: 'Clinics'
      }
    }).state('clinical-practice', {
      url: '/clinical-practice',
      templateUrl: '/pages/generic.html',
      data: {
        title: 'CU College of Nursing Clinical Practice',
        h1: 'Clinical Practice'
      }
    }).state('faculty-research', {
      url: '/about',
      templateUrl: '/pages/generic.html',
      data: {
        title: 'Faculty and Research at CU College of Nursing',
        h1: 'Faculty and Research'
      }
    });
          
});