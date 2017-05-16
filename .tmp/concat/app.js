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
app.directive("searchField",function(){
    return {
        scope:{value:"@"}, 
        template : '<div class="form-inline input-group-lg">' +
            '<input type="text" ng-model="value" class="nam_text form-control" />' +
            '<button class="nam_btn btn btn-primary btn-lg" ng-click="onSubmit()" >Search</button>' +
            '</div>' + 
            '<b>{{result}}</b>',
        controller : function($scope){
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
        if ($scope.isShowAdd) {
            $scope.list.push($scope.addNote)

        } else {
            $scope.originalItem.note = $scope.addNote.note
            $scope.originalItem.desc = $scope.addNote.desc
            $scope.originalItem.color = $scope.addNote.color
            $scope.originalItem = null

        }
        $scope.showList();
    }
    $scope.showList = function () {
        $scope.isShowList = true;
        $scope.isShowEdit= false;
        $scope.isShowAdd = false;
        $scope.isShowRead = false;
    }


})
app.controller("liveCodeDirective", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeDirective', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.live-code-directive .swiper-container', {
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


})
app.controller("liveCodeDom", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeDom', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.live-code-dom .swiper-container', {
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


})
app.controller("liveCodeInstallation", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeInstallation', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.installation .swiper-container', {
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


})
app.controller("liveCodeRouting", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeRouting', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.live-code-routing .swiper-container', {
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


})
app.controller("liveCodeTwoWay", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeTwoWay', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.live-code-twoway .swiper-container', {
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


})
app.controller('ctrlMVC', function ($timeout) {
  
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

                Reveal.addEventListener('slidechanged', function (event) {
                    //console.log(event.previousSlide, event.currentSlide, event.indexh, event.indexv);
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

                var mvcSlides = new TraversableArray(Array.prototype.slice.call(linkParent))

            },1000)



    
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

app.controller('otherFeatures', function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('otherFeatures', function (event) {
        $timeout(function () {
            if (mySwiper == null) {

                new Swiper('.otherFeatures .swiper-container', {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".otherFeatures .swiper-button-next",
                    prevButton: ".otherFeatures .swiper-button-prev",
                })

            }

        }, 1000);
        // TODO: Sprinkle magic
    }, false);




})
app.controller("two_way_db",function($scope){
	$scope.name = "AngularJS";

    $scope.changeModel = function(){
        $scope.name = "Everybody"
    }
})
app.controller("whatIsAngular", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('whatIsAngular', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.whatIsAngular .swiper-container', {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".whatIsAngular .swiper-button-next",
                    prevButton: ".whatIsAngular .swiper-button-prev",

                })
            }, 1000);
           
        }
    }, false);


})