angular.module('conWireframe').factory('clinicFactory', function(dataFactory){

  'use strict';
  
  var clinics = {
    "locations": []
  };
  
  dataFactory.getData('clinics')
    .then(function(response) {
      clinics.locations.push(response.data.sort(function (a,b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      }));
    }, function(error) {
      console.log(error.message);
  });
  
  /* 
  Dynamically display if clinic is open or closed based on current time of day. Need to call functions after data is returnd from getter.
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
  
  
  return clinics;
  
});