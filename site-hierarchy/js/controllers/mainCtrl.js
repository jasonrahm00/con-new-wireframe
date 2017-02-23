angular.module('conWireframe').controller('mainCtrl', function ($scope, dataFactory) {
  
  'use strict';
  
  $scope.programs;
  $scope.programChoice;
  $scope.programLevel;
  
  dataFactory.getData('programs')
    .then(function(response) {
      $scope.programs = response.data.sort(function (a,b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
    }, function(error) {
      console.log(error.message);
  });
  
  $scope.setProgramLevel = function(x) {
    $scope.programLevel = x;
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