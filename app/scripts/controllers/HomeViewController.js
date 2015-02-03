/**
 * Created by anatr on 2/3/15.
 */

(function(define) {
    "use strict";

    define(['angular'], function(angular) {
        angular.module('amdAppApp.controllers.HomeView', []).controller('HomeView', ['$log', '$scope', function ($log, $scope) {
            $log = $log.getInstance('HomeView');
            $log.debug('constructor initialization..');

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }]);
    });
}(define));