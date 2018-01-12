angular.module('conWireframe').factory('degreeFactory', function($q, dataService){

  'use strict';
  
  /********************* Default data *********************/
  var defaultDegreeData = [
    {
      "appOpen": true,
      "name": "Application Open",
      "dates": {
        "open": "January 1, 2018",
        "close": "December 31, 2050",
        "interview": "Sometime",
        "decision": "April 1",
        "start": "August"
      }
    },
    {
      "appOpen": false,
      "name": "Application Closed",
      "dates": {
        "open": "September 1, 2017",
        "close": "December 15, 2017",
        "interview": "February, 2018",
        "decision": "April 1, 2018",
        "start": "TBD"
      }
    }
  ];
  
  /********************* Degree Object *********************/
  var degreeObject = {
    "degrees": [],
    "chosenDegree": undefined,
    "dates": undefined,
    "appOpen": null,
    "degreeDefaults": defaultDegreeData[0]
  };
  
  /********************* degreeObject functions and methods *********************/
  
  //Set default data when called from degreeCtrl
  degreeObject.setDefaults = function(x) {
    for(var i = 0; i < defaultDegreeData.length; i++) {
      var dataSet = defaultDegreeData[i];
      if(dataSet.name === x) {
        degreeObject.degreeDefaults = dataSet;
      }
    }
    return this;
  }

  //Expects open- and closeDate dependencies and checks if 'today' falls within the date range
  function openApp(openDate, closeDate) {
    
    degreeObject.appOpen = false;
    
    var today = Date.parse(new Date()),
        open = Date.parse(openDate),
        close = Date.parse(closeDate);
    
    //Sets degreeObject.appOpen property to true or false depending on conditional date range check
    if(open <= today && close >= today) {
      degreeObject.appOpen = true;
    } else {
      degreeObject.appOpen = false;
    } 
  }

  degreeObject.getDegrees = function() {
    var deferred = $q.defer();
    //Sends degree file url to dataService
    return dataService.getData('con-oit-wireframe/js/data/degrees.json')
      .then(function(response) {
         //Assignes returned object to degreeObject.degrees property
        degreeObject.degrees = response;
        //Resolves promise and returns result to controller
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.error(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };
  
  //Used to filter or reset available degree options
    //Expects string input from controller function call
  degreeObject.setDegree = function(x) {

    if(x === 'reset') {
      //Resets chosenDegree property to undefined if reset button is clicked on page
      degreeObject.chosenDegree = undefined;
    } else {
      //Takes injected string and checks agains availabel degree.key datapoints
        //If match is found, entire degree object assigned to 'chosenDegree' property
      degreeObject.degrees.forEach(function(item) {
        if(item.key === x) {
          degreeObject.chosenDegree = item;
        }
      });
    }

    return this;
    
  };
  
  //Expects individual program pathway object as dependency
    //Used to match against degree data to find important date information
  degreeObject.getDates = function(x) {
    var availableDates = degreeObject.chosenDegree.dates,
        path = x.path;
    
    degreeObject.dates = undefined;
    
    //Check to see if selected degree has any date information
    if(availableDates) {
      
      //If only one date object available, sets dates property to that object
      if(availableDates.length == 1) {
        degreeObject.dates = availableDates[0];
      } else {
        //If multiple dates are available
          //Iterate over those objects
            //Find the one where the 'path' propery matches the 'path' property from injected object
            //When match is found, it is assigned to degreeObject.dates property
        for(var i = 0; i < degreeObject.chosenDegree.dates.length; i++) {
          if(degreeObject.chosenDegree.dates[i].path === path) {
            degreeObject.dates = degreeObject.chosenDegree.dates[i];
          }
        }
      }
      
      //openApp function called to determine if application is currently available
      openApp(degreeObject.dates.open, degreeObject.dates.close);
      
    }
    return this;
  }

  return degreeObject;
  
});