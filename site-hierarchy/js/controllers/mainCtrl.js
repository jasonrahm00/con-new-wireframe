angular.module('conWireframe').controller('mainCtrl', function ($scope, programFactory) {
  
  'use strict';
  
  $scope.degreePathSort = [];
  $scope.pageloadView = 'all';
  $scope.programs;
  $scope.programLevel;
  $scope.specialtyChoice;
  
  programFactory.getPrograms()
    .then(function(response) {
      $scope.programs = response.data;
    }, function(error) {
      console.log(error.message);
  });

  $scope.edLevelSort = function(x) {
    console.log(x);
    $scope.degreePathSort = [];
    for(var i = 0; i < $scope.programs.length; i++) {
      var program = $scope.programs[i];
      for(var j = 0; j < program.audience.length; j++) {
        var audience = program.audience[j];
        if(audience === parseInt(x)) {
          $scope.degreePathSort.push(program);
        }
      }
    }
    console.log($scope.degreePathSort);
  };
  
  jQuery(window).click(function () {
    jQuery('nav>ul>li').removeClass('active');
  });

  jQuery('nav>ul>li').click(function(event) {
    event.stopPropagation();
    jQuery('nav>ul>li').not(this).removeClass('active');
    jQuery(this).toggleClass('active');
  });
  
});