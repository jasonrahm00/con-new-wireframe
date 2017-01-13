angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('home', {
      url: '/',
      templateUrl: '/pages/home.html',
      data: {
        title: 'CON Wireframe'
      }
    })
    .state('academics', {
      url: '/academics',
      templateUrl: '/pages/academics/academics-landing.html',
      data: {
        title: 'Academcis',
        breadcrumb: 'Home > Academics'
      }
    })
    .state('section-landing-page', {
      url: '/academics/program-section-landing-page',
      templateUrl: '/pages/academics/program-section.html',
      data: {
        title: 'Program Section Landing Page'
      }
    })
    .state('program-landing-page', {
      url: '/academics/program-landing-page',
      templateUrl: '/pages/academics/program-landing.html',
      data: {
        title: 'Academic Program Landing Page',
        breadcrumb: 'Home > Academics > Program Section > Program Name'
      }
    });
  
  $urlRouterProvider.otherwise('/');
  
});