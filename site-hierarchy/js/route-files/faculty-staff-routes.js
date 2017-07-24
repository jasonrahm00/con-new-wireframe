angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('faculty-staff', {
      url: '/faculty-staff',
      templateUrl: '/pages/faculty/faculty-staff-landing.html',
      data: {
        title: 'College of Nursing Faculty and Staff',
        breadcrumb: 'Home > Faculty and Staff'
      }
    })
    .state('administration', {
      url: '/faculty-staff/administration',
      templateUrl: '/pages/faculty/administration.html',
      data: {
        title: 'College of Nursing Administration',
        breadcrumb: 'Home > Faculty and Staff > Administration'
      },
      controller: 'administrationCtrl'
    })
    .state('faculty-directory', {
      url: '/faculty-staff/faculty-directory',
      templateUrl: '/pages/faculty/faculty-directory.html',
      data: {
        title: 'College of Nursing Faculty Profile',
        breadcrumb: 'Home > Faculty and Staff > Faculty Directory'
      }
    })
    .state('faculty-profile', {
      url: '/faculty-staff/faculty-profile',
      templateUrl: '/pages/faculty/faculty-profile.html',
      data: {
        title: 'College of Nursing Faculty Profile',
        breadcrumb: 'Home > Faculty and Staff > Faculty Profile'
      }
    });
  
});