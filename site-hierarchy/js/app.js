angular.module('conWireframe', ['ui.router']);

angular.module('conWireframe').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
  
});