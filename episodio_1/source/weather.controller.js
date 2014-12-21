(function() {
    'use strict';

    angular
        .module('ww_app')
        .controller('WeatherCtrl', WeatherCtrl);

    /* @ngInject */
    function WeatherCtrl(weather_info, $log) {
        /*jshint validthis: true */
        var vm    = this;
        vm.data   = weather_info;

        activate();

        function activate() {
          $log.debug('data: ', vm.data);
        }
    }
})();