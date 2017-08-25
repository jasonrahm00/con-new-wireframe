angular.module('conWireframe').directive('applyNow', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<span class="apply-now"><a class="button margin-top-small">Apply Now</a><p class="red">If application is not open, hide apply button and display application open date</p></span>'
  };
  
});

angular.module('conWireframe').directive('admissionRequirements', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<a data-ui-sref="program-admissions">View Requirements</a>'
  };
  
});

angular.module('conWireframe').directive('programPage', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<a data-ui-sref="default-program-page">Visit Program Page</a>'
  };
  
});

angular.module('conWireframe').directive('programLink', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<a data-ui-sref="{{ program.url }}">{{ program.name }}</a>'
  };
  
});

