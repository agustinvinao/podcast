(function() {
    'use strict';

    angular
        .module('ww_app', [
            'ngResource',
            'ngRoute'
        ]);

    angular
      .module('ww_app')
      .config(config)

    function config($routeProvider, $locationProvider, WeatherProvider){

      $routeProvider
        .when('/',{
          templateUrl: '/weather.html',
          controller:  'WeatherCtrl',
          controllerAs: 'vm',
          resolve: {
            weather_info: weatherPromise
          }
        });

      $routeProvider.otherwise('/');
      $locationProvider.html5Mode(true);

      WeatherProvider.setCoordinates(-37.979858, -57.589794);
    }

    /* @ngInject */
    function weatherPromise(WeatherFactory){
      return WeatherFactory.ByCoordinates();
    }
})();