/**
 * Created by anatr on 2/3/15.
 */

(function (define) {
    "use strict";

    define(['utils/LogExporter', 'controllers/HomeViewController', 'controllers/AboutViewController'], function ($log, HomeViewController, AboutViewController) {
        var RouteManager = function ($routeProvider) {
            $log.debug('RouteManager:: configuring route provider');
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: "HomeView"
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: AboutViewController
                })
                .otherwise({
                    redirectTo: '/'
                });
        };

        // register as global constructor function
        return ['$routeProvider', RouteManager];
    });

}(define));