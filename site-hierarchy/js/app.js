angular.module('conWireframe', ['ui.router']);

angular.module('conWireframe').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
  })
  
});

//
//angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
//  
//  $stateProvider
//    
//    // View states for main pages linked in Nav
//  
//    .state('home', {
//        url: '/',
//        templateUrl: '/pages/home.html',
//        data: {
//          title: 'CON Wireframe'
//        }
//      })
//    .state('academics', {
//        url: '/academics',
//        templateUrl: '/pages/academics/academics-landing.html',
//        data: {
//          title: 'Academcis'
//        }
//      })
//    .state('undergraduate-programs', {
//        url: '/academics/undergraduate-programs',
//        templateUrl: '/pages/academics/program-section.html',
//        data: {
//          title: 'Undergraduate Programs'
//        }
//      })
//      .state('graduate-programs', {
//        url: '/academics/graduate-programs',
//        templateUrl: '/pages/academics/program-section.html',
//        data: {
//          title: 'Graduate Programs'
//        }
//      })
//    .state('graduate-specialties', {
//        url: '/academics/graduate-specialties',
//        templateUrl: '/pages/academics/program-section.html',
//        data: {
//          title: 'Graduate Specialties'
//        }
//      })
//    .state('additional-programs', {
//        url: '/academics/additional-programs',
//        templateUrl: '/pages/academics/program-section.html',
//        data: {
//          title: 'Additional Programs'
//        }
//      });
//  
//  $urlRouterProvider.otherwise('/');
//  
//});


