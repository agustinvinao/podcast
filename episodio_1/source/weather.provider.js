(function() {
    'use strict';

    angular
        .module('ww_app')
        .provider('Weather', Weather);

    function Weather(){
      var lat = 0, lon = 0;

      this.setCoordinates = function(_lat, _lon){
        lat = _lat;
        lon = _lon;
      };

      this.$get = ['$resource', function($resource) {
        var url       = 'http://api.openweathermap.org/data/2.5/forecast',
            resource  = $resource(url,
          { },
          {
            byCoordinates: {
              method: 'GET',
              url: [url, '?lang=es&lat=', lat, '&lon=', lon].join('')
            }
          });
        return resource;
      }];
    }
})();