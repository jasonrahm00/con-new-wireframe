angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('about', {
      url: '/about',
      templateUrl: '/pages/about/about-landing.html',
      data: {
        title: 'About the CU College of Nursing',
        breadcrumb: 'Home > About'
      }
    })
    .state('contact', {
      url: '/about/contact',
      templateUrl: '/pages/about/contact.html',
      data: {
        title: 'Contact the CU College of Nursing',
        breadcrumb: 'Home > About > Contact'
      }
    })
    .state('events', {
      url: '/about/events',
      templateUrl: '/pages/about/events.html',
      data: {
        title: 'Upcoming Events at the CU College of Nursing',
        breadcrumb: 'Home > About > Events'
      }
    })
    .state('history', {
      url: '/about/history',
      templateUrl: '/pages/about/history.html',
      data: {
        title: 'History of the CU College of Nursing',
        breadcrumb: 'Home > About > History'
      }
    })
    .state('meet-dean', {
      url: '/about/meet-dean',
      templateUrl: '/pages/about/meet-dean.html',
      data: {
        title: 'Meet the CU College of Nursing Dean',
        breadcrumb: 'Home > About > Meet the Dean'
      }
    })
    .state('news', {
      url: '/about/news',
      templateUrl: '/pages/about/news.html',
      data: {
        title: 'CU College of Nursing News',
        breadcrumb: 'Home > About > News'
      }
    });
  
});