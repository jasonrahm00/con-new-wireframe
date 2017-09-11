angular.module('conWireframe').directive('admitRequirements', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/admissions/admit-requirements.html'
  };

});

angular.module('conWireframe').directive('additionalRequirements', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/admissions/admit-add-require.html'
  };

});

angular.module('conWireframe').directive('admitNextSteps', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/admissions/admit-next-steps.html'
  };

});

angular.module('conWireframe').directive('specialtyList', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/admissions/specialty-list.html'
  };

});