var app = angular.module("app", ['ngAnimate',  'angular-carousel', 'frapontillo.bootstrap-switch', 'ngMaterial']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
            .primaryPalette('blue')


});
app.directive("axon", function () {

    return{
        templateUrl: 'slides/axon_effect.html',
        controller: function ($element) {


            var gradient_percent = 0,
                    gradient_offset = {
                        min: -40,
                        max: 140
                    },
                    speed = 2,
                    gradient_color = 'rgba(6, 155, 251, 1)',
                    empty_color = 'rgba(0, 0, 0 , 0)';

            setInterval(function () {
                gradient_percent += speed;

                if (gradient_percent > gradient_offset.max) {
                    gradient_percent = gradient_offset.min;
                }

              //   $($element).find('.slide_effect').css('background-image', '-webkit-radial-gradient(' + gradient_percent + '% 50%, 3em 2em, ' + gradient_color + ' 0%, ' + empty_color + ' 100%)')
            }, 2000);

        }
    }

})
app.controller("ctr", function ($scope, $timeout) {
    Reveal.addEventListener('axon', function (event) {
        console.log(event)


    })
    var slidesFolder = "slides/";


    $scope.getSection = function (section) {
        return slidesFolder + section.contain + ".html";

    };
    function registerEvent() {



    }
    $timeout(function () {
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            width: 1200,
            height: 700,
            transition: 'convex', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                {src: 'lib/js/classList.js', condition: function () {
                        return !document.body.classList;
                    }},
                {src: 'plugin/markdown/marked.js', condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }},
                {src: 'plugin/markdown/markdown.js', condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }},

                {src: 'plugin/zoom-js/zoom.js', async: true},
                {src: 'plugin/notes/notes.js', async: true}
            ]
        });
        registerEvent();


    }, 3000)





})