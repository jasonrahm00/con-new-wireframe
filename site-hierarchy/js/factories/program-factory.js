angular.module('conWireframe').factory('programFactory', function($http){

  'use strict';
  
  var programs = {};
  
  programs.getPrograms = function() {
    return $http.get('/js/data/programs.json');
  }

  return programs;  
  
});