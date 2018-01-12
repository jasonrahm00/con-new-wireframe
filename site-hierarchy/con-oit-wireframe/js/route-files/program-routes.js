angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for program page and sub-pages
    .state('programs', {
      url: '/programs',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/programs.html',
      data: {
        title: 'CU College of Nursing Programs',
        breadcrumb: 'Programs',
        image: 'con-oit-wireframe/images/programs.jpg',
        imgAlt: 'Students in a classroom'
      },
      controller: 'programCtrl'
    })
    .state('degree-page', {
      url: '/programs/degree-page',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/degree-page.html',
      data: {
        title: 'CU College of Nursing Single Degree',
        breadcrumb: 'Degree Page',
        image: 'con-oit-wireframe/images/anschutz-walkway.jpg',
        imgAlt: 'Anschutz walkway photo'
      },
      controller: 'degreeCtrl'
    })
    .state('global-health', {
      url: '/programs/global-health',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/global-health.html',
      data: {
        title: 'Global Health Nursing Programs',
        breadcrumb: 'Global Health'
      },
      controller: 'programCtrl'
    })
    .state('more-info', {
      url: '/programs/degree-page/more-info',
      templateUrl: 'con-oit-wireframe/pages/main-nav/programs/more-info.html',
      data: {
        title: 'Request More Information',
        breadcrumb: 'Request More Information'
      },
      controller: 'programCtrl'
    });
          
});