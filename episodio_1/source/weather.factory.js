(function() {
    'use strict';

    angular
        .module('ww_app')
        .factory('WeatherFactory', WeatherFactory);

    /* @ngInject */
    function WeatherFactory(Weather) {
        var factory = {
            ByCoordinates: _byCoordinates
        };
        return factory;

        function _byCoordinates() {
          return Weather.byCoordinates().$promise;
        }
    }
})();