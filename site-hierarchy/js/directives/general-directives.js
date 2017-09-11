angular.module('conWireframe').directive('applyNow', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/general/apply-now.html'
  };
  
});

angular.module('conWireframe').directive('deadlines', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/general/deadlines.html'
  };
  
});

angular.module('conWireframe').directive('datesActions', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/general/dates-actions.html'
  };
  
});

angular.module('conWireframe').directive('faqs', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/general/faqs.html'
  };
  
});

angular.module('conWireframe').directive('programLink', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<a data-ui-sref="{{ program.url }}">{{ program.name }}</a>'
  };
  
});
