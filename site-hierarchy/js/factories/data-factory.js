angular.module('conWireframe').factory('dataFactory', function($http){

  'use strict';
  
  var data = {};
  
  data.getData = function(x) {
    return $http.get('/js/data/' + x + '.json');
  }

  return data;  
  
});