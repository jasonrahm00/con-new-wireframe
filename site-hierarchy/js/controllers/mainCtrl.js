angular.module('conWireframe').controller('mainCtrl', function ($scope, programFactory) {
  
  'use strict';
  
  $scope.programs = programFactory.programs;
  
  $scope.setProgramChoice = function(program) {
    programFactory.setProgramChoice(program);
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