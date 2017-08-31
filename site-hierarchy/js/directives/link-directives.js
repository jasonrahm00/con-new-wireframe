angular.module('conWireframe').directive('applyNow', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="apply-now width-45"><a class="button margin-top-small">Apply Now</a><p class="red">If application is not open, hide apply button and display "Application Not Open" message</p></div>'
  };
  
});

angular.module('conWireframe').directive('admissionRequirements', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<a data-ui-sref="program-admissions">View Requirements</a>'
  };
  
});

angular.module('conWireframe').directive('programLink', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<a data-ui-sref="{{ program.url }}">{{ program.name }}</a>'
  };
  
});

