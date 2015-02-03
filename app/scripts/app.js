(function (define) {
    'use strict';

    define(['angular', 'utils/LogExporter', 'utils/LogDecorator', 'RouteManager', 'controllers/HomeViewController']/*deps*/, function (angular, $log, LogDecorator, RouteManager)/*invoke*/ {
        $log = $log.getInstance('amdApp');
        $log.debug('init..');

        /**
         * @ngdoc overview
         * @name amdAppApp
         * @description
         * # amdAppApp
         *
         * Main module of the application.
         */
        return angular
            .module('amdAppApp', [
                'amdAppApp.controllers.HomeView',
                /*angJSDeps*/
                'ngRoute'
            ])
            .config(LogDecorator)
            .config(RouteManager);
    });

}(define));