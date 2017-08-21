angular.module('conWireframe').directive('applyNow', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<span><a class="button">Apply Now</a></span>'
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

