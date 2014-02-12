/**
 * Created by marchaubenstock on 12/02/2014.
 */

var myControllers = angular.module('myControllers', []);

myControllers.controller('indexCtrl', ['$scope',
    function($scope) {

        $('#currentCSS').attr('href','../css/min/index.min.css')

        $('ul.navbar-nav ').children().removeClass('active');

        $('#home').addClass('active');

//        $("#email-button").tooltip();

        $scope.emailTooltip = "Email";

        var firstTitle = 'Example headline';
        var secondTitle = 'Another example headline';
        var thirdTitle = 'One more for good measure';

        var firstMain = '<p>Note: If you\'re viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>';
        var secondMain = '<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>';
        var thirdMain = '<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>';

        $scope.myInterval = 12000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            slides.push({
                header: [firstTitle, secondTitle, thirdTitle ][slides.length % 3],
                text: [firstMain, secondMain, thirdMain ][slides.length % 3]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }

    }]);

myControllers.controller('kontaktCtrl', [
    function () {

        $('#currentCSS').attr('href','../css/min/kontakte.min.css')

        $('ul.navbar-nav ').children().removeClass('active');

        $('#kontakte').addClass('active');
    }]);

myControllers.controller('meCtrl', [
    function () {

        $('#currentCSS').attr('href','../css/min/me.min.css')

        $('ul.navbar-nav ').children().removeClass('active');

        $('#me').addClass('active');
    }]);

myControllers.controller('impressumCtrl', [
    function () {

        $('#currentCSS').attr('href','../css/min/impressum.min.css')

        $('ul.navbar-nav ').children().removeClass('active');

        $('#impressum').addClass('active');
    }]);

myControllers.controller('linksCtrl', [
    function () {

        $('#currentCSS').attr('href','../css/min/links.min.css')

        $('ul.navbar-nav ').children().removeClass('active');

        $('#links').addClass('active');
    }]);

