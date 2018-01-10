angular.module('conWireframe').factory('defaultFactory', function(){

  'use strict';

  var defaultProgramData = [
    {
      "appOpen": false,
      "name": "Application Closed",
      "dates": {
        "open": "September 1, 2017",
        "close": "December 15, 2017",
        "interview": "February, 2018",
        "decision": "April 1, 2018",
        "start": "August"
      }
    },
    {
      "appOpen": true,
      "name": "Application Open",
      "dates": {
        "open": "January 1, 2018",
        "close": "December 31, 2018",
        "interview": "February, 2018",
        "decision": "April 1, 2018",
        "start": "August"
      }
    }
  ];
  
  var defaultData = {
    "programData": {
      "appOpen": null,
      "defaultProgram": {}
    }
  };
  
  defaultData.setProgramDefaults = function(x) {
    for(var i = 0; i < defaultProgramData.length; i++) {
      var dataSet = defaultProgramData[i];
      if(dataSet.name === x) {
        defaultData.defaultProgram = {
          "appOpen": dataSet.appOpen,
          "name": dataSet.name,
          "dates": dataSet.dates
        }
      }
    };
    
    return this;
  }

  return defaultData;
  
});