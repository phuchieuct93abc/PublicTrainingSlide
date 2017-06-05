var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ngMessages', 'angular-carousel', 'frapontillo.bootstrap-switch', 'ngMaterial', 'mgcrea.ngStrap']);
app.config(function ($mdThemingProvider, $routeProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
//$compileProvider.commentDirectivesEnabled(false);
//$compileProvider.cssClassDirectivesEnabled(false);
    $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    $routeProvider
            .when('/26/', {
                templateUrl: 'slides/main.html'
            })
            .when('/26/showOrders', {
                templateUrl: 'slides/red.html'
            })
            .when('/26/addNewOrders', {
                templateUrl: 'slides/green.html'
            })
            .when('/19/', {
                templateUrl: 'slides/main.html'
            })
            .when('/19/showOrders', {
                templateUrl: 'slides/red.html'
            })
            .when('/19/addNewOrders', {
                templateUrl: 'slides/green.html'
            })


});
app.directive('search', function () {

    return {
        replace: true,
        scope: {
            model: "="
        },
        templateUrl: "slides/search-directive.html",
        controller: function ($scope, $element, $timeout) {
            $scope.focus = function () {
                $timeout(function () {
                    $($element).find("input").focus()
                }, 1000);


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
app.controller("ctr", function ($scope, $timeout,$location) {
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
       $location.path("#"+$location.path())

    }, 3000)

    $scope.getLink = function(link){
        if(link == "#/"){
            return "/$"
        }
        return link.replace("#","")+"$";
    }
    
    $scope.nav = [
        {
            name: "Welcome",
            link: "#/",
            isSub: false
        },
        {
            name: "Ground rules",
            link: "#/1",
            isSub: false
        },{
            name: "Who we are",
            link: "#/2",
            isSub: false
        },{
            name: "Content",
            link: "#/3",
           isSub: false
        },
        {
            name: "AngularJS Introduction",
            link: "#/4",
            isSub: false
        },{
            name: "What is AngularJS",
            link: "#/5",
           isSub: true
        },
        {
            name: "Why should use AngularJS",
            link: "#/6",
           isSub: true
        },{
            name: "More features",
            link: "#/7",
           isSub: true
        },{
            name: "AngularJS trend",
            link: "#/8",
           isSub: true
        },
        {
            name: "Core features",
            link: "#/9",
           isSub: false
        },
        {
            name: "MVC Architecture",
            link: "#/10",
           isSub: true
        },
         {
            name: "Two way data binding",
            link: "#/11",
           isSub: true
        }, {
            name: "Two way data binding - Example",
            link: "#/12",
           isSub: true
        }, {
            name: "Directive",
            link: "#/13",
           isSub: true
        },
        {
            name: "Directive - Demo",
            link: "#/14",
           isSub: true
        },
        {
            name: "Directive - Example",
            link: "#/15",
           isSub: true
        },
         {
            name: "DOM manipulation",
            link: "#/16",
           isSub: true
        },
        {
            name: "Routing",
            link: "#/17",
           isSub: true
        },{
            name: "Routing + Deep linking",
            link: "#/18",
           isSub: true
        },{
            name: "Routing - Example",
            link: "#/19",
           isSub: true
        }
        ,{
            name: "Live Code",
            link: "#/21",
           isSub: false
        }
        ,{
            name: "Installation",
            link: "#/22",
           isSub: true
        }
        ,{
            name: "Two way data binding",
            link: "#/23",
           isSub: true
        },
        {
            name: "Dom manipulation",
            link: "#/24",
           isSub: true
        },
         {
            name: "Directive",
            link: "#/25",
           isSub: true
        },
        {
            name: "Routing",
            link: "#/26",
           isSub: true
        },
        {
            name: "Coding competition",
            link: "#/27",
           isSub: false
        },
          {
            name: "AngularJS 2",
            link: "#/32",
           isSub: false
        },
         {
            name: "Resources",
            link: "#/39",
           isSub: false
        }
    ]
})