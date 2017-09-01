angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('academics', {
      url: '/academics',
      templateUrl: '/pages/academics/academics-landing.html',
      data: {
        title: 'Academcis',
        breadcrumb: 'Home > Academics'
      },
      controller: 'academicsCtrl'      
    })
    .state('section-landing-page', {
      url: '/academics/program-section-landing-page',
      templateUrl: '/pages/academics/program-section.html',
      data: {
        title: 'Program Section Landing Page'
      },
      controller: 'academicsCtrl'
    })
    .state('default-program-page', {
      url: '/academics/default-program-page',
      templateUrl: '/pages/academics/default-program-landing.html',
      data: {
        title: 'Program Page',
        breadcrumb: 'Home > Academics > Program Name'
      },
      controller: 'academicsCtrl'
    })
    .state('grad-specialty-req-page', {
      url: '/academics/grad-specialty-req-page',
      templateUrl: '/pages/academics/grad-specialty-req.html',
      data: {
        title: 'Graduate Program Page',
        breadcrumb: 'Home > Academics > Graduate Program Name'
      },
      controller: 'academicsCtrl'
    })
    .state('specialty-landing-page', {
      url: '/academics/specialty-landing-page',
      templateUrl: '/pages/academics/specialty-landing.html',
      data: {
        title: 'Specialty Program Page',
        breadcrumb: 'Home > Academics > Specialty Program Name'
      },
      controller: 'academicsCtrl'
    })
    .state('post-grad-certificate', {
      url: '/academics/post-graduate-certificate',
      templateUrl: '/pages/academics/post-grad.html',
      data: {
        title: 'Post-Graduate Certificates',
        breadcrumb: 'Home > Academics > Post Graduate Certificates'
      },
      controller: 'academicsCtrl'
    })
  .state('non-degree-education', {
      url: '/academics/non-degree-education',
      templateUrl: '/pages/academics/non-degree.html',
      data: {
        title: 'Non-Degree Education',
        breadcrumb: 'Home > Academics > Non-Degree Education'
      },
      controller: 'academicsCtrl'
    })
  .state('grad-certificate-landing', {
      url: '/academics/grad-certificate-landing',
      templateUrl: '/pages/academics/grad-certificates/grad-certificate-landing.html',
      data: {
        title: 'Available Graduate-Level Certificates',
        breadcrumb: 'Home > Academics > Graduate-Level Certificate'
      },
      controller: 'academicsCtrl'
    })
  .state('grad-certificate-page', {
      url: '/academics/grad-certificate-landing/grad-certificate-page',
      templateUrl: '/pages/academics/grad-certificates/grad-certificate-page.html',
      data: {
        title: 'Graduate-Level Certificate',
        breadcrumb: 'Home > Academics > Graduate-Level Certificates > Graduate-Level Certificates'
      },
      controller: 'academicsCtrl'
    })
  .state('continuing-education', {
      url: '/academics/continuing-education-professional-development',
      templateUrl: '/pages/academics/cepd.html',
      data: {
        title: 'Continuing Nursing Education',
        breadcrumb: 'Home > Academics > Continuing Nursing Education'
      },
      controller: 'academicsCtrl'
    });
  
});