angular.module('conWireframe').directive('customAccordion', function(){
  
  return {
    restrict: 'AEC',
    scope: {
      // default: '400ms'
      // options: 'milliseconds', 'slow', or 'fast'
      toggleSpeed: '@toggleSpeed',
      slideUpSpeed: '@slideUpSpeed',
      // default: 'swing'
      // options: 'swing', 'linear'
      toggleEasing: '@toggleEasing',
      slideUpEasing: '@slideUpEasing'
    },
    link: function (scope, element, attrs) {
      element.find('.accordion-header').click(function () {
        var elem = $(this);
        elem.next().slideToggle(scope.toggleSpeed, scope.toggleEasing);
        $('.accordion-body').not($(this).next()).slideUp(scope.slideUpSpeed, scope.slideUpEasing);
      });
    }
  };
  
});