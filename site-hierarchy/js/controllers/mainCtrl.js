angular.module('conWireframe').controller('mainCtrl', function ($scope, programFactory) {
  
  'use strict';
  
  $scope.allPrograms = [];
  $scope.currentEdLevel;
  $scope.degreePathSort = [];
  $scope.pageloadView = 'all';
  $scope.programs;
  $scope.programLevel;
  
  programFactory.getPrograms()
    .then(function(response) {
      $scope.programs = response.data;
      pushAllPrograms($scope.programs);
    }, function(error) {
      console.log(error.message);
  });
  
  function pushAllPrograms(x) {
    var courses = [];
    for(var i = 0; i < x.length; i++) {
      var level = x[i].courses
      for(var j = 0; j < level.length; j++)
        $scope.allPrograms.push(level[j]);
    }
  }
  
//  $scope.edLevelSort = function() {
//    for(var i = 0; i < $scope.allPrograms.length; i++) {
//      var program = $scope.allPrograms[i];
//      for(var j = 0; j < program.audience.length; j++) {
//        var audience = program.audience[j].toString();
//        if(audience === $scope.currentEdLevel) {
//          $scope.degreePathSort.push(program);
//        } else {
//          console.log('no audience matches found');
//        }
//      }
//    }
//    console.log($scope.degreePathSort);
//  };
  
  jQuery(window).click(function () {
    jQuery('nav>ul>li').removeClass('active');
  });

  jQuery('nav>ul>li').click(function(event) {
    event.stopPropagation();
    jQuery('nav>ul>li').not(this).removeClass('active');
    jQuery(this).toggleClass('active');
  });
  
});