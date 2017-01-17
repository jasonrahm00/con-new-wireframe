angular.module('conWireframe').controller('mainCtrl', function ($scope, programFactory) {
  
  'use strict';
  
  $scope.programs;
  $scope.programLevel = "";
  $scope.availableCourses = [];
  
  jQuery(window).click(function () {
    jQuery('nav>ul>li').removeClass('active');
  });
  
  jQuery('nav>ul>li').click(function(event) {
    event.stopPropagation();
    jQuery('nav>ul>li').not(this).removeClass('active');
    jQuery(this).toggleClass('active');
  });
  
  programFactory.getPrograms()
    .then(function(response) {
      $scope.programs = response.data;
    }, function(error) {
      console.log(error.message);
  });
  
});