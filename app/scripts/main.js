(function (require) {
    "use strict";

    require.config({
        baseUrl: '/scripts',
        paths: {
            angular: '../../bower_components/angular/angular',
            'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
            'angular-route': '../../bower_components/angular-route/angular-route',
            'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
            bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
            jquery: '../../bower_components/jquery/dist/jquery'
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            'angular-route': [
                'angular'
            ],
            'angular-mocks': {
                deps: [
                    'angular'
                ],
                exports: 'angular.mock'
            }
        },
        priority: [
            'angular'
        ],
        packages: [
    
        ]
    });

    //http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
    window.name = 'NG_DEFER_BOOTSTRAP!';

    require([
        'angular',
        'app',
        'angular-route'
    ], function (angular, app, ngRoutes) {
        angular.element().ready(function () {
            angular.resumeBootstrap([app.name]);
        });
    });

}(require));