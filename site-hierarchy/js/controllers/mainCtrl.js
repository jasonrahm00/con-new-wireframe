angular.module('conWireframe').controller('mainCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  programFactory.getPrograms().then(function() {
    $scope.programs = programFactory.programs;
  });
  
  jQuery(window).click(function () {
    jQuery('nav>ul>li').removeClass('active');
  });

  jQuery('nav>ul>li').click(function(event) {
    event.stopPropagation();
    jQuery('nav>ul>li').not(this).removeClass('active');
    jQuery(this).toggleClass('active');
  });
    
});