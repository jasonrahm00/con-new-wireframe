angular.module('conWireframe').factory('degreeFactory', function($q, dataService){

  'use strict';
  
  var degreeObject = {
    "degrees": [],
    "chosenDegree": undefined,
    "dates": undefined,
    "appOpen": false
  };
  
  function openApp(x, y) {
    
    degreeObject.appOpen = false;
    
    var today = Date.parse(new Date()),
        open = Date.parse(x),
        close = Date.parse(y);
    
    if(open <= today && close >= today) {
      degreeObject.appOpen = true;
    }
      
  }
  
  degreeObject.getDegrees = function() {
    var deferred = $q.defer();
    return dataService.getData('con-oit-wireframe/js/data/degrees.json')
      .then(function(response) {
        degreeObject.degrees = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.error(response);
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
      
      openApp(degreeObject.dates.open, degreeObject.dates.close);
      
    }
    return this;
  }

  return degreeObject;
  
});