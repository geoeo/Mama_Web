/**
 * Created by marchaubenstock on 11/02/2014.
 */

var myApp = angular.module('myApp', ['ngRoute','myControllers','ui.bootstrap']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index' , {
                templateUrl: 'partials/main.html',
                controller: 'indexCtrl'
            }).
            when('/kontakte', {
                templateUrl: 'partials/kontakte.html',
                controller:  'kontaktCtrl'
            }).
            when('/me',{
                templateUrl: 'partials/me.html',
                controller:  'meCtrl'
            }).
            when('/impressum',{
                templateUrl: 'partials/impressum.html',
                controller:  'impressumCtrl'
            }).
            when('/links',{
                templateUrl: 'partials/links.html',
                controller:  'linksCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);
