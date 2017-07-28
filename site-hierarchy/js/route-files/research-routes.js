angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
  .state('research', {
    url: '/research',
    templateUrl: '/pages/research/research-landing.html',
    data: {
      title: 'CU College of Nursing Nursing Research',
      breadcrumb: 'Home > Nursing Research'
    }
  })
  .state('ccnr', {
    url: '/research/ccnr',
    templateUrl: '/pages/research/ccnr.html',
    data: {
      title: 'Colorado Collaborative for Nursing Research',
      breadcrumb: 'Home > Nursing Research > Colorado Collaborative for Nursing Research'
    }
  })
  .state('cpaww', {
      url: '/research/cpaww',
      templateUrl: '/pages/research/cpaww.html',
      data: {
        title: 'Canines Providing Assistance for Wounded Warriors',
        breadcrumb: 'Home > Nursing Research > Canines Providing Assistance for Wounded Warriors'
      }
    })
  .state('crns', {
      url: '/research/crns',
      templateUrl: '/pages/research/crns.html',
      data: {
        title: 'Center for Research and Nursing Scholarship',
        breadcrumb: 'Home > Nursing Research > Center for Research and Nursing Scholarship'
      }
    })
  .state('ors', {
      url: '/research/ors',
      templateUrl: '/pages/research/ors.html',
      data: {
        title: 'Office of Research and Scholarship',
        breadcrumb: 'Home > Nursing Research > Office of Research and Scholarship'
      }
    });
  
});