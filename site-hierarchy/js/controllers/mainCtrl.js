angular.module('conWireframe').controller('mainCtrl', function ($scope, dataFactory) {
  
  'use strict';
  
  $scope.programs;
  $scope.programLevel = 'all';
  $scope.sortedPrograms = [];
  $scope.specialtyChoice;
  
  dataFactory.getData('programs')
    .then(function(response) {
      $scope.programs = response.data.sort(function (a,b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
    }, function(error) {
      console.log(error.message);
  });

  $scope.programSort = function(x) {
    var programs = $scope.programs;
    $scope.sortedPrograms = [];
    $scope.programLevel = x;
    for (var i = 0; i < programs.length; i++) {
      if(programs[i].level === x) {
        $scope.sortedPrograms.push(programs[i]);
      }
    }
    
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