define(['angular', 'angular-mocks', 'angular-route', 'app'], function () {
    'use strict';

    describe('Controller: HomeView', function () {

        // load the controller's module
        beforeEach(module('amdAppApp'));
        beforeEach(module('amdAppApp.controllers.HomeView'));

        var MainCtrl, scope, $log;

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            MainCtrl = $controller('HomeView', {
                $scope: scope
            });
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            expect(scope.awesomeThings.length).toBe(3);
        });
    });
});
