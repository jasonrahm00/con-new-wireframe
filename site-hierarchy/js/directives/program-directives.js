angular.module('conWireframe').directive('alumniSnapshot', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/programs/alumni-snapshot.html'
  };
  
});

angular.module('conWireframe').directive('programVideo', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/O6-0QmxYotU" frameborder="0" allowfullscreen></iframe></div>'
  };

});

angular.module('conWireframe').directive('programPlans', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/programs/program-plans.html'
  };

});

angular.module('conWireframe').directive('careerOptions', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/programs/career-options.html'
  };

});

angular.module('conWireframe').directive('programBody', function(){
  
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/programs/program-body.html'
  };

});