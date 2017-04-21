angular.module('conWireframe').directive('clinicMap', function($compile){
  
  //https://jsfiddle.net/Xeoncross/k5c2ndyL/
  //https://plnkr.co/edit/gJiK6N90xf22yJjyb9g8?p=preview
  
  // directive link function
  var link = function(scope, element, attrs) {
    var map, infoWindow;
    var markers = [];
    var locations = scope.locations;
    
    // map config
    var mapOptions = {
      center: new google.maps.LatLng(39.7392, -104.9903),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: true
    };
    
    function getPageUrl(x) { 
      return x !== '' ? x : 'home';
    }

    // init the map
    function initMap() {
      map = new google.maps.Map(element[0], mapOptions);
      
      // place a marker
      function setMarker(map, location) {

        var marker;
        var markerOptions = {
          position: new google.maps.LatLng(location.lat, location.long),
          map: map
        };
        
        var markerContent = '<div class="markerInfo"><strong>' + location.name + '</strong></div>'

        marker = new google.maps.Marker(markerOptions);
        
        google.maps.event.addListener(marker, 'click', function() {
          
          if(infoWindow !== void 0) {
            infoWindow.close();
          }
          infoWindow = new google.maps.InfoWindow();
          infoWindow.setContent(markerContent);
          infoWindow.open(map, marker);
          
        });

      }
      
      for(var i = 0; i < locations.length; i++) {
        setMarker(map, locations[i]);
      }
      
    }    
    
    //create map
    initMap();
    
  };

  return {
    restrict: 'E',
    template: '<div id="mapContainer"></div>',
    replace: true,
    link: link,
    scope: {
      locations: '='
    }
  };
});