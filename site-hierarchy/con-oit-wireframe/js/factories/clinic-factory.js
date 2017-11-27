angular.module('conWireframe').factory('clinicFactory', function($q, dataService){

  'use strict';

  var clinicObject = {
    "locations": [],
    "selected": {}
  };
  
  clinicObject.getClinics = function() {
    var deferred = $q.defer();
    return dataService.getData('con-oit-wireframe/js/data/clinics.json')
      .then(function(response) {
        clinicObject.locations = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };
  
  clinicObject.selectClinic = function(x) {
    this.selected = x;
    return this;
  };
  
  clinicObject.getServices = function(x) {
    return x.services;
    return this;
  };
  
  /* 
  Dynamically display if clinic is open or closed based on current time of day. 
  Change the "open": true/false property on each clinic object to indicate if it is currently open
  //Convert time string to date object: http://stackoverflow.com/questions/16382266/javascript-set-time-string-to-date-object
  Have to pass in current day from view and check against hours of operation in data object
    
  var timer = setInterval(currentTime, 1000);
  
  function currentTime() {
    return new Date();
  }
  
  function setDateTime(date, time, mer) {
    var index = time.indexOf(":");
    var hours = parseInt(time.substring(0, index));
    var minutes = time.substring(index + 1);
    
    if (mer === "pm") {
      hours += 12;  
    }
    
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds("00");
    
    return date;
  }

  $scope.setClose = function(x, y) {
    var busOpen = setDateTime(currentTime(), x, "am");
    var busClose = setDateTime(currentTime(), y, "pm");
    if(timer < busOpen || timer > busClose) {
      return false;
    }
  };
  */
  
  
  return clinicObject;
  
});