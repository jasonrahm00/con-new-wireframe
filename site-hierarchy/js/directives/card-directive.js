angular.module('conWireframe').directive('cardDirective', function(){
  
  var currentTarget;
  
  return {
    restrict: 'AEC',
    link: function (scope, element, attrs) {
      element.click(function () {
        if(currentTarget === this) {
          $(this).next().slideUp();
          currentTarget = null;
        } else {
          $('.toggle-content').not($(this).next()).slideUp();
          $(this).next().slideDown();
          currentTarget = this;
        }
      });
    }
  };
  
});