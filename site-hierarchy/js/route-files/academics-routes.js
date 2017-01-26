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
    .state('default-program-page', {
      url: '/academics/default-program-page',
      templateUrl: '/pages/academics/default-program-landing.html',
      data: {
        title: 'Program Page',
        breadcrumb: 'Home > Academics > Program Name'
      }
    })
    .state('grad-landing-page', {
      url: '/academics/graduate-program-page',
      templateUrl: '/pages/academics/grad-landing.html',
      data: {
        title: 'Graduate Program Page',
        breadcrumb: 'Home > Academics > Graduate Program Name'
      }
    })
    .state('specialty-landing-page', {
      url: '/academics/specialty-program-page',
      templateUrl: '/pages/academics/specialty-landing.html',
      data: {
        title: 'Specialty Program Page',
        breadcrumb: 'Home > Academics > Specialty Program Name'
      }
    })
    .state('additional-landing-page', {
      url: '/academics/additional-program-page',
      templateUrl: '/pages/academics/additional-landing.html',
      data: {
        title: 'Additional Programs Page',
        breadcrumb: 'Home > Academics > Additional Program Name'
      }
    });
  
  $urlRouterProvider.otherwise('/');
  
});