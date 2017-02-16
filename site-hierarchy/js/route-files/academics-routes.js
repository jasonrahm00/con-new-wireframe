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
    .state('post-grad-certificate', {
      url: '/academics/post-graduate-certificate',
      templateUrl: '/pages/academics/post-grad.html',
      data: {
        title: 'Post-Graduate Certificates',
        breadcrumb: 'Home > Academics > Post Graduate Certificates'
      }
    })
  .state('non-degree-education', {
      url: '/academics/non-degree-education',
      templateUrl: '/pages/academics/non-degree.html',
      data: {
        title: 'Non-Degree Education',
        breadcrumb: 'Home > Academics > Non-Degree Education'
      }
    })
  .state('grad-certificate', {
      url: '/academics/graduate-level-certificate',
      templateUrl: '/pages/academics/grad-certificate.html',
      data: {
        title: 'Graduate-Level Certificate',
        breadcrumb: 'Home > Academics > Graduate-Level Certificate'
      }
    })
  .state('cepd', {
      url: '/academics/continuing-education-professional-development',
      templateUrl: '/pages/academics/cepd.html',
      data: {
        title: 'Continuing Education and Professional Development',
        breadcrumb: 'Home > Academics > Continuing Education and Professional Development'
      }
    });
  
  $urlRouterProvider.otherwise('/');
  
});