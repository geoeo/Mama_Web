/**
 * Created by marchaubenstock on 12/02/2014.
 */

var myControllers = angular.module('myControllers', []);

myControllers.controller('indexCtrl', [
    function() {

        $(document).ready(function(){


            $('#currentCSS').attr('href','../css/min/index.min.css')

            $('ul.navbar-nav ').children().removeClass('active');

            $('#home').addClass('active');

            $("#mainCarousel").carousel({
                interval : 12000
            });
            $("#email-button").tooltip();

        });


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

