angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('ccnr', {
      url: '/ccnr',
      templateUrl: '/pages/research/ccnr.html',
      data: {
        title: 'Colorado Collaborative for Nursing Research',
        breadcrumb: 'Home > Colorado Collaborative for Nursing Research'
      }
    })
  .state('cpaww', {
      url: '/cpaww',
      templateUrl: '/pages/research/cpaww.html',
      data: {
        title: 'Canines Providing Assistance for Wounded Warriors',
        breadcrumb: 'Home > Canines Providing Assistance for Wounded Warriors'
      }
    })
  .state('crns', {
      url: '/crns',
      templateUrl: '/pages/research/crns.html',
      data: {
        title: 'Center for Research and Nursing Scholarship',
        breadcrumb: 'Home > Center for Research and Nursing Scholarship'
      }
    })
  .state('ors', {
      url: '/ors',
      templateUrl: '/pages/research/ors.html',
      data: {
        title: 'Office of Research and Scholarship',
        breadcrumb: 'Home > Office of Research and Scholarship'
      }
    });
  
});