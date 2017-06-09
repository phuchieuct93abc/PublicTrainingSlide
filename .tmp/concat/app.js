var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ngMessages', 'angular-carousel', 'frapontillo.bootstrap-switch', 'ngMaterial', 'mgcrea.ngStrap']);
app.config(function ($mdThemingProvider, $routeProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
//$compileProvider.commentDirectivesEnabled(false);
//$compileProvider.cssClassDirectivesEnabled(false);
    $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    $routeProvider
            .when('/27/', {
                templateUrl: 'slides/main.html'
            })
            .when('/27/showOrders', {
                templateUrl: 'slides/red.html'
            })
            .when('/27/addNewOrders', {
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
    $scope.goto =function(link){
        console.log(link)
        $location.path($scope.getLink(link))
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
app.controller('angular2', function ($scope) {

    document.addEventListener('fragment', function (e) {
        if (e.detail == "angular2") {
            $scope.isAngular2 = true;
            $scope.isAngular2_2 = false;


        } else if (e.detail == "angular1") {
            $scope.isAngular2 = false;
            $scope.isAngular2_2 = false;


        } else if (e.detail == "angular2_2") {
            $scope.isAngular2_2 = true;

        }
        $scope.$evalAsync();

    })
})
app.directive('axonLogo', function () {

    return {
        replace: true,
        templateUrl: "slides/axon-directive.html",
        controller: function ($scope) {


        }
    }

})
//app.directive("code",function(){
//    return{
//        templateUrl:"slides/code.html",
//        transclude:true,
//        replace:true,
//        controller:function($scope){
//             $scope.open = function(){
//                 $scope.isOpen=true;
//             }
//        }
//    }
//    
//})
app.controller("ctr4",function($scope){
	$scope.click=function(feature,state){
		$scope[feature]=state;


	}
});
app.controller("ctr5", function ($scope) {

    $scope.table1 = [
        {
            name: "JavaScript",
            value: "90"
        },
        {
            name: "AngularJS",
            value: "40"
        },
        {
            name: "PHP",
            value: "35"
        },

        {
            name: "NodeJS",
            value: "32"
        },
        {
            name: "Wordpress",
            value: "30"
        },
        {
            name: "React",
            value: "28"
        }


    ]
});
$.fn.visibleFragment = function () {
    var context = $(this);
    var isInsideSwiper = context.parents(".swiper-container").length > 0;
    if (isInsideSwiper && context.attr('no-slide')==null) {
        var swiperId = context.parents(".swiper-container").eq(0).attr("swiper-id");
        var index = context.index()

        var event = new CustomEvent(swiperId, {"detail": index});

        document.dispatchEvent(event);

    } else if (context.parents(".mvc-wrapper").length > 0) {
        var index = context.index();
        var event = new CustomEvent("mvc", {"detail": index});
        document.dispatchEvent(event);
    } else {
        var fragmentId = context.attr("fragment-id");
        var event = new CustomEvent("fragment", {"detail": fragmentId});
        document.dispatchEvent(event);
    }
}
app.directive("searchField",function(){
    return {
        scope:{}, 
        template : '<div class="form-inline input-group-lg">' +
            '<input type="text" ng-model="value" class="nam_text form-control" />' +
            '<button class="nam_btn btn btn-primary btn-lg" ng-click="onSubmit()" >Search</button>' +
            '</div>' + 
            '<b>{{result}}</b>',
        controller : function($scope){
            $scope.value =""
            $scope.result = 'Result: ';
            $scope.onSubmit = function(){
                $scope.result = 'Result: ' + $scope.value;
            }
            $scope.onSubmit();
        }
    }
})
app.controller("domManipulation",function($scope){
	$scope.classes=['text-primary','text-danger','text-success']
    $scope.class='text-primary';
	$scope.getClass=function(classString){
	    try{
            return JSON.parse(classString)

        }catch(exception){
	        return {};
        }

    }
})
app.controller("hackathonDemo", function ($scope) {
    $scope.model={}
    $scope.list = [
        {note: "Axon Active",
            desc: "Awesome"

        }

    ]
    $scope.colors = [
        {
            color: "white",
            name: "White"
        },
        {
            color: "#29b6f6",
            name: "Blue"
        },
        {
            color: "#8bc34a",
            name: "Light green"
        },
        {
            color: "#cddc39",
            name: "Lime"
        }

    ]

    $scope.isShowList = true;
    $scope.addNew = function ($event) {
        $scope.originalItem = null
        $event.stopPropagation();
        $scope.isShowList = false;
        $scope.isShowAdd = true;
        $scope.isShowRead = false;
        $scope.isShowEdit = false;
        $scope.addNote = {}

    }
    $scope.edit = function (item) {
        $scope.originalItem = item;
        $scope.addNote = angular.copy(item);
        $scope.isShowList = false;
        $scope.isShowAdd = false;
        $scope.isShowRead = false;
        $scope.isShowEdit = true;

    }

    $scope.read = function (item) {
        $scope.selectedNote = item;
        $scope.isShowList = false;
        $scope.isShowAdd = false;
        $scope.isShowRead = true;
        $scope.isShowEdit = false;

    }
    $scope.create = function () {
        if ($scope.edit.form.$valid) {

            if ($scope.isShowAdd) {
                $scope.list.push($scope.addNote)

            } else {
                $scope.originalItem.note = $scope.addNote.note
                $scope.originalItem.desc = $scope.addNote.desc
                $scope.originalItem.color = $scope.addNote.color
                $scope.originalItem = null

            }
            $scope.showList();
        } else {
            angular.forEach($scope.edit.form.$error, function (field) {
                angular.forEach(field, function (errorField) {
                    errorField.$setTouched();
                })
            });

        }
    }
    $scope.showList = function () {
        $scope.isShowList = true;
        $scope.isShowEdit = false;
        $scope.isShowAdd = false;
        $scope.isShowRead = false;
    }


})
app.controller("letStart", function ($timeout) {
    Reveal.addEventListener('letStart', function () {
        $timeout(function () {

            // Grab the current date
            // Set some date in the past. In this case, it's always been since Jan 1
            // Calculate the difference in seconds between the future and current date
            var diff = 60 * 80;
            // Instantiate a coutdown FlipClock
            $('.my-clock').FlipClock(diff, {
                clockFace: 'SecondCounter',
                showSeconds: false,
                countdown: true,
                callbacks: {
                    stop: function () {
                        $('#myModal').modal({backdrop: true})
                    }
                }
            });

        }, 1000)
    }, false);





})
app.controller("liveCodeDirective", function ($scope,$timeout,$element) {
    var mySwiper;
     $scope.model={};
    
    document.addEventListener('fragment', function (e) {
        if (e.detail == "directive-slide") {
            $scope.model.hide = true;

        } else if (e.detail == "directive-demo") {

            $scope.model.hide = false;


        }
        $scope.$evalAsync();

    })
    Reveal.addEventListener('liveCodeDirective', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-directive .swiper-button-next",
                    prevButton: ".live-code-directive .swiper-button-prev",

                })
            }, 1000);
            $('.live-code-directive pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
   document.addEventListener("liveCodeDirective", function (e) {
        if(e.detail!=null && mySwiper!=null){
          mySwiper.slideTo(e.detail, 500, true); 
        }
    });

})
app.controller("directiveAdvance", function ($scope,$timeout,$element) {
    var mySwiper;
     $scope.model={};
    
    
    Reveal.addEventListener('liveCodeDirectiveAdvance', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-directive-advance .swiper-button-next",
                    prevButton: ".live-code-directive-advance .swiper-button-prev",

                })
            }, 1000);
            $('.live-code-directive-advance pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
   document.addEventListener("liveCodeDirectiveAdvance", function (e) {
        if(e.detail!=null && mySwiper!=null){
          mySwiper.slideTo(e.detail, 500, true); 
        }
    });

})
app.directive('directiveDemo',function(){
    return {
        template:'<form class=" form-inline" style="white-space: nowrap;">'
        +'<input ng-model="modelName" class="form-control " style="width:400px" placeholder="Search"/>'
+'<button ng-click="getValue()" class="btn btn-lg btn-primary">Submit</button> </form>',
                
           
        scope:true,
        controller:function($scope){
             $scope.getValue = function(){
                alert($scope.modelName)
            }
        }
    }
    
})
app.controller("liveCodeDom", function ($scope,$timeout,$element) {
    var mySwiper;
    $scope.classes = [{
            name:"Text danger",
            className:"text-danger"},
        {
            name:"Text success",
            className:"text-success"},
        {
            name:"Text primary",
            className:"text-primary"}
    ]

    $scope.submit=function(){alert('submit')}
    Reveal.addEventListener('liveCodeDom', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-dom .swiper-button-next",
                    prevButton: ".live-code-dom .swiper-button-prev",

                })
            }, 1000);
            $('.live-code-dom pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
   document.addEventListener("liveCodeDom", function (e) {
        if(e.detail!=null && mySwiper!=null){
           mySwiper.slideTo(e.detail, 500, true); 
        }
    });

})
app.controller("liveCodeInstallation", function ($timeout,$element) {
    var mySwiper;
    Reveal.addEventListener('liveCodeInstallation', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".installation .swiper-button-next",
                    prevButton: ".installation .swiper-button-prev",

                })
            }, 1000);
            $('.installation pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
    document.addEventListener("liveCodeInstallation", function (e) {
        if(e.detail!=null && mySwiper!=null){
           mySwiper.slideTo(e.detail, 500, true); 
        }
    });

})
app.controller("liveCodeRouting", function ($scope,$timeout,$element) {
    var mySwiper;
      document.addEventListener('fragment', function (e) {
        if (e.detail == "routing-slide") {
            $scope.hide = true;

        } else if (e.detail == "routing-demo") {

            $scope.hide = false;


        }
        $scope.$evalAsync();

    })
    Reveal.addEventListener('liveCodeRouting', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-routing .swiper-button-next",
                    prevButton: ".live-code-routing .swiper-button-prev",

                })
            }, 1000);
            $('.live-code-routing pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
    document.addEventListener("liveCodeRouting", function (e) {
        if(e.detail!=null && mySwiper!=null){
            mySwiper.slideTo(e.detail, 500, true);
        }
    });

})
app.controller("liveCodeRoutingAdvance", function ($scope,$timeout,$element) {
    var mySwiper;      
    Reveal.addEventListener('liveCodeRoutingAdvance', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-routing .swiper-button-next",
                    prevButton: ".live-code-routing .swiper-button-prev",

                })
            }, 1000);
            $('.live-code-routing pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
    document.addEventListener("liveCodeRoutingAdvance", function (e) {
        if(e.detail!=null && mySwiper!=null){
            mySwiper.slideTo(e.detail, 500, true);
        }
    });

})
app.controller("liveCodeTwoWay", function ($scope, $timeout, $element) {
    //demo
    $scope.demoList = []
    $scope.demoClick = function () {
        var newItem = {
            name: $scope.demoInput,
            time: new Date()
        }
        $scope.demoList.push(newItem)

    }
    $scope.model = {}
    document.addEventListener('fragment', function (e) {
        if (e.detail == "two-way-slide") {
            $scope.model.hide = true;

        } else if (e.detail == "two-way-demo") {
                        console.log("hien")

            $scope.model.hide = false;


        }
        $scope.$evalAsync();

    })
    var mySwiper;
    Reveal.addEventListener('liveCodeTwoWay', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-twoway .swiper-button-next",
                    prevButton: ".live-code-twoway .swiper-button-prev",

                })
            }, 1000);
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
    document.addEventListener("liveCodeTwoWay", function (e) {
        if (e.detail != null && mySwiper != null) {
            mySwiper.slideTo(e.detail, 500, true);
        }
    });


})
app.controller('ctrlMVC', function ($timeout,$element) {
  
            $timeout(function () {
                var link = $('.com__nav-link');
                var linkParent = link.parent('li');
                var section = $('.com__section');
                var sectionContent = section.find('*');
                var slides = $('.slides');

                var switchTab = function () {
                    var p = $(this).parent('li');
                    var i = p.index();
                    var s = section.eq(i);
                    var c = s.find('*');

                    section.removeClass('active');
                    sectionContent.removeAttr('style');
                    s.addClass('active');

                    c.css({
                        transform: 'none',
                        opacity: 1
                    });

                    linkParent.removeClass('active');
                    p.addClass('active');

                    return false;
                };

                link.on('click', switchTab);

                function activeFirst() {
                    section.first().addClass('active');
                    section.first().find('*').css({
                        transform: 'none',
                        opacity: 1
                    });
                    linkParent.first().addClass('active');
                }

                activeFirst();

                Reveal.addEventListener('mvcState', function () {
                    slides.css({"zoom": "1", "height": "100%"})
                    $('pre code').each(function (i, block) {
                        setTimeout(function () {
                            hljs.highlightBlock(block);
                        }, 100)
                    });
                });

                


                $('.com .img').off('mouseover').off('mouseout').on('mouseover', function () {
                    $('h2').css('color', '#404855')
                }).on('mouseout', function () {
                    $('h2').css('color', 'white')
                })

                document.onkeydown = checkKey;

                function checkKey(e) {

                    e = e || window.event;

                    if (e.keyCode == '38') {
                        // up arrow
                        var prev = mvcSlides.prev();
                        $(prev).find('a').trigger('click');
                    } else if (e.keyCode == '40') {
                        // down arrow
                        var next = mvcSlides.next();
                        $(next).find('a').trigger('click');
                    }
                }

                function TraversableArray() {
                    console.log(arguments);
                    if (typeof arguments[0] === "number")
                        this.length = arguments[0];
                    else
                        this.push.apply(this, arguments);

                    this.current = 0;
                }
                TraversableArray.prototype = [];
                TraversableArray.prototype.constructor = TraversableArray;
                TraversableArray.prototype.next = function () {
                    var self = this[0];
                    var index = ++this.current;
                    if (this.current == self.length) {
                        this.current = 0;
                    }

                    return self[index % self.length];
                };
                TraversableArray.prototype.prev = function () {
                    var self = this[0];
                    var index = --this.current;
                    if (this.current + self.length <= 0) {
                        this.current = 0;
                    }

                    return self[(index + self.length) % self.length];
                };

                var mvcSlides = new TraversableArray(Array.prototype.slice.call(linkParent));
                
            },1000)


document.addEventListener("mvc", function (e) {
            var index = e.detail
        if(index!=null){
           $($element).find(".com__nav-list").find("li").eq(index).find("a").trigger("click")
            
        }
    });


    
});

app.directive('renderNestedHtml', function ($timeout) {
    return {
       
        compile: function (element, attrs) {
            var rawHtml = element[0].innerHTML;
            var code = angular.element('<code data-trim></code>');

            code.text(rawHtml.trim());
            element.replaceWith(code);
        },
    }
})

app.controller('otherFeatures', function ($timeout,$element) {
    var mySwiper;
    Reveal.addEventListener('otherFeatures', function (event) {
        $timeout(function () {
            if (mySwiper == null) {

                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".otherFeatures .swiper-button-next",
                    prevButton: ".otherFeatures .swiper-button-prev",
                })

            }

        }, 1000);
        // TODO: Sprinkle magic
    }, false);

    document.addEventListener("otherFeatures", function (e) {
        if(e.detail!=null && mySwiper!=null){
           mySwiper.slideTo(e.detail, 500, true); 
        }
    });




})
app.controller("routing", function ($location, $scope, $timeout) {
    Reveal.addEventListener('routing', function () {
        var url = $location.absUrl();
        console.log($location.absUrl(), $location.path())
        $scope.url = url.replace($location.path(), "/") + "3";
    }, false);




    $scope.move = function () {
        $location.path("/3")

    }


})
app.controller("two_way_db",function($scope){
	$scope.name = "AngularJS";

    $scope.changeModel = function(){
        $scope.name = "Everybody"
    }
})
app.controller("whatIsAngular", function ($timeout,$element) {
    

})