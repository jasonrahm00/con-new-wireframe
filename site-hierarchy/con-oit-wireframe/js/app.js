angular.module('conWireframe', ['ui.router']);

angular.module('conWireframe').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
  
});

angular.module('conWireframe').config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  
    .state('home', {
      url: '/',
      templateUrl: 'con-oit-wireframe/pages/home.html',
      data: {
        title: 'CON OIT Sitemap',
        breadcrumb: 'Home'
      }
    });
  $urlRouterProvider.otherwise('/');
  
});

//Capitalize Filter
angular.module('conWireframe').filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});

angular.module('conWireframe').filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});