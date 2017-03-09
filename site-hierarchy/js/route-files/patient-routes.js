angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('patients', {
      url: '/patients',
      templateUrl: '/pages/patients/patients-home.html',
      data: {
        title: 'Patients',
        breadcrumb: 'Home > Patients'
      },
      controller: 'patientsCtrl'
    })
  .state('center-home', {
      url: '/center-home',
      templateUrl: '/pages/patients/center-home.html',
      data: {
        title: 'Center Home',
        breadcrumb: 'Home > Patients > Center Home'
      },
      controller: 'patientsCtrl'
    })
  .state('clinic-location', {
      url: '/clinic-location',
      templateUrl: '/pages/patients/clinic-location.html',
      data: {
        title: 'Clinic Location',
        breadcrumb: 'Home > Patients > Center Home > Clinic Location'
      },
      controller: 'patientsCtrl'
    })
  .state('find-clinic', {
      url: '/find-clinic',
      templateUrl: '/pages/patients/find-clinic.html',
      data: {
        title: 'Find a Clinic',
        breadcrumb: 'Home > Patients > Find a Clinic'
      },
      controller: 'patientsCtrl'
    });
  
});