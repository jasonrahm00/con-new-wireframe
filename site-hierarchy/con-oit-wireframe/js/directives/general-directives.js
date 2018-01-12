//Main nav directive with responsive design
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
      
      //Watches screen width and returns nav template for different breakpoints
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

//Directive that adds or removes the 'toggled' class when any element with the 'toggle-class' attribute is clicked on
  //Use case example found on expand/collapse menu for mobile and small-screen nav
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

//Directive used to create ankleNav component and reduce code living in index file
angular.module('conWireframe').directive('ankleNav', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'con-oit-wireframe/templates/ankle-nav.html'
  };
  
});