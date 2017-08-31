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