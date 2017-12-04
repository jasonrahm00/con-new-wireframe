angular.module('conWireframe').factory('degreeFactory', function($q, dataService){

  'use strict';
  
  var degreeObject = {
    "degrees": [],
    "chosenDegree": undefined,
    "dates": undefined
  };
  
  degreeObject.getDegrees = function() {
    var deferred = $q.defer();
    return dataService.getData('con-oit-wireframe/js/data/degrees.json')
      .then(function(response) {
        degreeObject.degrees = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };
  
  degreeObject.setDegree = function(x) {
    
    if(x === 'reset') {
      degreeObject.chosenDegree = undefined;
    } else {
      degreeObject.degrees.forEach(function(item) {
        if(item.key === x) {
          degreeObject.chosenDegree = item;
        }
      });
    }

    return this;
    
  };
  
  degreeObject.getDates = function(x) {
    var availableDates = degreeObject.chosenDegree.dates,
        path = x.path;
    
    degreeObject.dates = undefined;
    
    if(availableDates) {
      
      if(availableDates.length == 1) {
        degreeObject.dates = availableDates[0];
      } else {
        for(var i = 0; i < degreeObject.chosenDegree.dates.length; i++) {
          if(degreeObject.chosenDegree.dates[i].path === path) {
            degreeObject.dates = degreeObject.chosenDegree.dates[i];
          }
        }
      }
    }
    return this;
  }

  return degreeObject;
  
});