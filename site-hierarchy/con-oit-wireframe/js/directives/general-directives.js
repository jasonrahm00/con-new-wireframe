angular.module('conWireframe').directive('mainNav', function($window){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<nav data-ng-include="templateUrl"></nav>',
    link: function(scope) {
      
      $window.onresize = function() {
        changeTemplate();
        scope.$apply();
      }
      
      changeTemplate();
      
      function changeTemplate() {
        var screenWidth = $window.innerWidth;
        
        if(screenWidth < 400) {
          scope.templateUrl = 'con-oit-wireframe/templates/main-nav/small-mobile-nav.html'
        } else if(screenWidth >= 400 && screenWidth < 992) {
          scope.templateUrl = 'con-oit-wireframe/templates/main-nav/mobile-nav.html';
        } else if(screenWidth >= 992) {
          scope.templateUrl = 'con-oit-wireframe/templates/main-nav/desktop-nav.html';
        }
      }
      
    }
  };
  
});

angular.module('conWireframe').directive('toggleClass', function(){
  
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        element.toggleClass(attrs.toggleClass);
      });
    }
  };
  
});

angular.module('conWireframe').directive('ankleNav', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'con-oit-wireframe/templates/ankle-nav.html'
  };
  
});