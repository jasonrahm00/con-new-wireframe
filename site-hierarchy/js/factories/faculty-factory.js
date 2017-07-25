angular.module('conWireframe').factory('facultyFactory', function($q, dataService){

  'use strict';
  
  var facultyObject = {
    "allFaculty": [],
    "chosenFaculty": {
      "firstName": "Some",
      "lastName": "Person",
      "degrees": "PhD",
      "title": "King of Everything",
      "headshot": "/images/blank-profile.png",
      "email": "some.person@email.com",
      "phone": "555-555-5555",
      "bio": [
        "Mollis proin leo sollicitudin inceptos libero est sociis pede vulputate eros. Iaculis Et maecenas volutpat diam viverra bibendum pulvinar vehicula cubilia sit torquent varius tellus parturient tincidunt felis porttitor commodo massa commodo cras volutpat ut per ipsum pede ornare ultrices."
      ],
      "education": [
        {
          "degree": "PhD",
          "institution": "Some Fancy School",
          "field": "World Domination",
          "date": 2000
        }
      ],
      "awards": [
        {
          "name": "King",
          "organization": "The Earth",
          "year": [2017]
        }
      ],
      "research": [
        {
          "name": "How to take over the world",
          "year": "2000"
        }
      ],
      "practice": ["None of your business"],
      "publications": ["\"How I Took Over The World\""]
    }
  };
  
  facultyObject.getAllFaculty = function() {
    var deferred = $q.defer();
    return dataService.getData('/js/data/faculty.json')
      .then(function(response) {
        facultyObject.allFaculty = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };
  
  facultyObject.choseFaculty = function(person) {
    this.chosenFaculty = person;
    return this;
  }

  return facultyObject;
  
});