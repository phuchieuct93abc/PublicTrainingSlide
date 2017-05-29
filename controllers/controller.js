var app = angular.module("app", ['ngRoute','ngAnimate','ngMessages',  'angular-carousel', 'frapontillo.bootstrap-switch', 'ngMaterial']);
app.config(function ($mdThemingProvider,$routeProvider,$compileProvider) {
    $compileProvider.debugInfoEnabled(false);
//$compileProvider.commentDirectivesEnabled(false);
//$compileProvider.cssClassDirectivesEnabled(false);
    $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    $routeProvider
            .when('/26/',{
        templateUrl:'slides/main.html'  
    })
         .when('/26/showOrders',{
        templateUrl:'slides/red.html'
    })
         .when('/26/addNewOrders',{
        templateUrl:'slides/green.html'
    })
    .when('/19/',{
        templateUrl:'slides/main.html'  
    })
         .when('/19/showOrders',{
        templateUrl:'slides/red.html'
    })
         .when('/19/addNewOrders',{
        templateUrl:'slides/green.html'
    })


});
app.directive('search',function(){
    
    return {
        replace:true,
        scope:{
            model:"="
        },
        templateUrl:"slides/search-directive.html",
        controller:function($scope,$element,$timeout){
            $scope.focus = function(){
                $timeout( function(){
                    $($element).find("input").focus()
                },1000);
              
                
            }
            
        }
    }
    
})

app.directive("axon", function () {

    return{
        templateUrl: 'slides/axon_effect.html',
        controller: function ($element) {



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
    }, 3000)
})