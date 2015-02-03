/**
 * Created by anatr on 2/3/15.
 */

(function(define) {
    "use strict";

    define([], function() {
        var AboutViewController = function($log, $scope) {
            $log = $log.getInstance('AboutViewController');
            $log.debug('constructor init...');

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        };

        return ['$log', '$scope', AboutViewController];
    });
}(define));