var app=angular.module("app",["ngRoute","ngAnimate","ngMessages","angular-carousel","frapontillo.bootstrap-switch","ngMaterial","mgcrea.ngStrap"]);app.config(function($mdThemingProvider,$routeProvider,$compileProvider){$compileProvider.debugInfoEnabled(!1),$mdThemingProvider.theme("default").primaryPalette("blue"),$routeProvider.when("/26/",{templateUrl:"slides/main.html"}).when("/26/showOrders",{templateUrl:"slides/red.html"}).when("/26/addNewOrders",{templateUrl:"slides/green.html"}).when("/19/",{templateUrl:"slides/main.html"}).when("/19/showOrders",{templateUrl:"slides/red.html"}).when("/19/addNewOrders",{templateUrl:"slides/green.html"})}),app.directive("search",function(){return{replace:!0,scope:{model:"="},templateUrl:"slides/search-directive.html",controller:function($scope,$element,$timeout){$scope.focus=function(){$timeout(function(){$($element).find("input").focus()},1e3)}}}}),app.directive("axon",function(){return{templateUrl:"slides/axon_effect.html",controller:function($element){}}}),app.controller("ctr",function($scope,$timeout,$location){Reveal.addEventListener("axon",function(event){console.log(event)}),$scope.getSection=function(section){return"slides/"+section.contain+".html"},$timeout(function(){Reveal.initialize({controls:!0,progress:!0,history:!0,width:1200,height:700,transition:"convex",dependencies:[{src:"lib/js/classList.js",condition:function(){return!document.body.classList}},{src:"plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/zoom-js/zoom.js",async:!0},{src:"plugin/notes/notes.js",async:!0}]}),$location.path("#"+$location.path())},3e3),$scope.getLink=function(link){return"#/"==link?"/$":link.replace("#","")+"$"},$scope.nav=[{name:"Welcome",link:"#/",isSub:!1},{name:"Ground rules",link:"#/1",isSub:!1},{name:"Who we are",link:"#/2",isSub:!1},{name:"Content",link:"#/3",isSub:!1},{name:"AngularJS Introduction",link:"#/4",isSub:!1},{name:"What is AngularJS",link:"#/5",isSub:!0},{name:"Why should use AngularJS",link:"#/6",isSub:!0},{name:"More features",link:"#/7",isSub:!0},{name:"AngularJS trend",link:"#/8",isSub:!0},{name:"Core features",link:"#/9",isSub:!1},{name:"MVC Architecture",link:"#/10",isSub:!0},{name:"Two way data binding",link:"#/11",isSub:!0},{name:"Two way data binding - Example",link:"#/12",isSub:!0},{name:"Directive",link:"#/13",isSub:!0},{name:"Directive - Demo",link:"#/14",isSub:!0},{name:"Directive - Example",link:"#/15",isSub:!0},{name:"DOM manipulation",link:"#/16",isSub:!0},{name:"Routing",link:"#/17",isSub:!0},{name:"Routing + Deep linking",link:"#/18",isSub:!0},{name:"Routing - Example",link:"#/19",isSub:!0},{name:"Live Code",link:"#/21",isSub:!1},{name:"Installation",link:"#/22",isSub:!0},{name:"Two way data binding",link:"#/23",isSub:!0},{name:"Dom manipulation",link:"#/24",isSub:!0},{name:"Directive",link:"#/25",isSub:!0},{name:"Routing",link:"#/26",isSub:!0},{name:"Coding competition",link:"#/27",isSub:!1},{name:"AngularJS 2",link:"#/32",isSub:!1},{name:"Resources",link:"#/39",isSub:!1}]}),app.controller("angular2",function($scope){document.addEventListener("fragment",function(e){"angular2"==e.detail?($scope.isAngular2=!0,$scope.isAngular2_2=!1):"angular1"==e.detail?($scope.isAngular2=!1,$scope.isAngular2_2=!1):"angular2_2"==e.detail&&($scope.isAngular2_2=!0),$scope.$evalAsync()})}),app.directive("axonLogo",function(){return{replace:!0,templateUrl:"slides/axon-directive.html",controller:function($scope){}}}),app.controller("ctr4",function($scope){$scope.click=function(feature,state){$scope[feature]=state}}),app.controller("ctr5",function($scope){$scope.table1=[{name:"JavaScript",value:"90"},{name:"AngularJS",value:"40"},{name:"PHP",value:"35"},{name:"NodeJS",value:"32"},{name:"Wordpress",value:"30"},{name:"React",value:"28"}]}),$.fn.visibleFragment=function(){var context=$(this);if(context.parents(".swiper-container").length>0&&null==context.attr("no-slide")){var swiperId=context.parents(".swiper-container").eq(0).attr("swiper-id"),index=context.index(),event=new CustomEvent(swiperId,{detail:index});document.dispatchEvent(event)}else if(context.parents(".mvc-wrapper").length>0){var index=context.index(),event=new CustomEvent("mvc",{detail:index});document.dispatchEvent(event)}else{var fragmentId=context.attr("fragment-id"),event=new CustomEvent("fragment",{detail:fragmentId});document.dispatchEvent(event)}},app.directive("searchField",function(){return{scope:{},template:'<div class="form-inline input-group-lg"><input type="text" ng-model="value" class="nam_text form-control" /><button class="nam_btn btn btn-primary btn-lg" ng-click="onSubmit()" >Search</button></div><b>{{result}}</b>',controller:function($scope){$scope.value="",$scope.result="Result: ",$scope.onSubmit=function(){$scope.result="Result: "+$scope.value},$scope.onSubmit()}}}),app.controller("domManipulation",function($scope){$scope.classes=["text-primary","text-danger","text-success"],$scope.class="text-primary",$scope.getClass=function(classString){try{return JSON.parse(classString)}catch(exception){return{}}}}),app.controller("hackathonDemo",function($scope){$scope.model={},$scope.list=[{note:"Axon Active",desc:"Awesome"}],$scope.colors=[{color:"white",name:"White"},{color:"#29b6f6",name:"Blue"},{color:"#8bc34a",name:"Light green"},{color:"#cddc39",name:"Lime"}],$scope.isShowList=!0,$scope.addNew=function($event){$scope.originalItem=null,$event.stopPropagation(),$scope.isShowList=!1,$scope.isShowAdd=!0,$scope.isShowRead=!1,$scope.isShowEdit=!1,$scope.addNote={}},$scope.edit=function(item){$scope.originalItem=item,$scope.addNote=angular.copy(item),$scope.isShowList=!1,$scope.isShowAdd=!1,$scope.isShowRead=!1,$scope.isShowEdit=!0},$scope.read=function(item){$scope.selectedNote=item,$scope.isShowList=!1,$scope.isShowAdd=!1,$scope.isShowRead=!0,$scope.isShowEdit=!1},$scope.create=function(){$scope.edit.form.$valid?($scope.isShowAdd?$scope.list.push($scope.addNote):($scope.originalItem.note=$scope.addNote.note,$scope.originalItem.desc=$scope.addNote.desc,$scope.originalItem.color=$scope.addNote.color,$scope.originalItem=null),$scope.showList()):angular.forEach($scope.edit.form.$error,function(field){angular.forEach(field,function(errorField){errorField.$setTouched()})})},$scope.showList=function(){$scope.isShowList=!0,$scope.isShowEdit=!1,$scope.isShowAdd=!1,$scope.isShowRead=!1}}),app.controller("letStart",function($timeout){Reveal.addEventListener("letStart",function(){$timeout(function(){$(".my-clock").FlipClock(4800,{clockFace:"SecondCounter",showSeconds:!1,countdown:!0,callbacks:{stop:function(){$("#myModal").modal({backdrop:!0})}}})},1e3)},!1)}),app.controller("liveCodeDirective",function($scope,$timeout,$element){var mySwiper;$scope.model={},document.addEventListener("fragment",function(e){"directive-slide"==e.detail?$scope.model.hide=!0:"directive-demo"==e.detail&&($scope.model.hide=!1),$scope.$evalAsync()}),Reveal.addEventListener("liveCodeDirective",function(){null==mySwiper&&($timeout(function(){mySwiper=new Swiper($($element).find(".swiper-container"),{speed:1e3,spaceBetween:100,nextButton:".live-code-directive .swiper-button-next",prevButton:".live-code-directive .swiper-button-prev"})},1e3),$(".live-code-directive pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1),document.addEventListener("liveCodeDirective",function(e){null!=e.detail&&null!=mySwiper&&mySwiper.slideTo(e.detail,500,!0)})}),app.directive("directiveDemo",function(){return{template:'<form class=" form-inline" style="white-space: nowrap;"><input ng-model="modelName" class="form-control " style="width:400px" placeholder="Search"/><button ng-click="getValue()" class="btn btn-lg btn-primary">Submit</button> </form>',scope:!0,controller:function($scope){$scope.getValue=function(){alert($scope.modelName)}}}}),app.controller("liveCodeDom",function($scope,$timeout,$element){var mySwiper;$scope.classes=[{name:"Text danger",className:"text-danger"},{name:"Text success",className:"text-success"},{name:"Text primary",className:"text-primary"}],$scope.submit=function(){alert("submit")},Reveal.addEventListener("liveCodeDom",function(){null==mySwiper&&($timeout(function(){mySwiper=new Swiper($($element).find(".swiper-container"),{speed:1e3,spaceBetween:100,nextButton:".live-code-dom .swiper-button-next",prevButton:".live-code-dom .swiper-button-prev"})},1e3),$(".live-code-dom pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1),document.addEventListener("liveCodeDom",function(e){null!=e.detail&&null!=mySwiper&&mySwiper.slideTo(e.detail,500,!0)})}),app.controller("liveCodeInstallation",function($timeout,$element){var mySwiper;Reveal.addEventListener("liveCodeInstallation",function(){null==mySwiper&&($timeout(function(){mySwiper=new Swiper($($element).find(".swiper-container"),{speed:1e3,spaceBetween:100,nextButton:".installation .swiper-button-next",prevButton:".installation .swiper-button-prev"})},1e3),$(".installation pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1),document.addEventListener("liveCodeInstallation",function(e){null!=e.detail&&null!=mySwiper&&mySwiper.slideTo(e.detail,500,!0)})}),app.controller("liveCodeRouting",function($scope,$timeout,$element){var mySwiper;document.addEventListener("fragment",function(e){"routing-slide"==e.detail?$scope.hide=!0:"routing-demo"==e.detail&&($scope.hide=!1),$scope.$evalAsync()}),Reveal.addEventListener("liveCodeRouting",function(){null==mySwiper&&($timeout(function(){mySwiper=new Swiper($($element).find(".swiper-container"),{speed:1e3,spaceBetween:100,nextButton:".live-code-routing .swiper-button-next",prevButton:".live-code-routing .swiper-button-prev"})},1e3),$(".live-code-routing pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1),document.addEventListener("liveCodeRouting",function(e){null!=e.detail&&null!=mySwiper&&mySwiper.slideTo(e.detail,500,!0)})}),app.controller("liveCodeTwoWay",function($scope,$timeout,$element){$scope.demoList=[],$scope.demoClick=function(){var newItem={name:$scope.demoInput,time:new Date};$scope.demoList.push(newItem)},$scope.model={},document.addEventListener("fragment",function(e){"two-way-slide"==e.detail?$scope.model.hide=!0:"two-way-demo"==e.detail&&(console.log("hien"),$scope.model.hide=!1),$scope.$evalAsync()});var mySwiper;Reveal.addEventListener("liveCodeTwoWay",function(){null==mySwiper&&($timeout(function(){mySwiper=new Swiper($($element).find(".swiper-container"),{speed:1e3,spaceBetween:100,nextButton:".live-code-twoway .swiper-button-next",prevButton:".live-code-twoway .swiper-button-prev"})},1e3),$("pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1),document.addEventListener("liveCodeTwoWay",function(e){null!=e.detail&&null!=mySwiper&&mySwiper.slideTo(e.detail,500,!0)})}),app.controller("ctrlMVC",function($timeout,$element){$timeout(function(){function activeFirst(){section.first().addClass("active"),section.first().find("*").css({transform:"none",opacity:1}),linkParent.first().addClass("active")}function checkKey(e){if(e=e||window.event,"38"==e.keyCode){var prev=mvcSlides.prev();$(prev).find("a").trigger("click")}else if("40"==e.keyCode){var next=mvcSlides.next();$(next).find("a").trigger("click")}}function TraversableArray(){console.log(arguments),"number"==typeof arguments[0]?this.length=arguments[0]:this.push.apply(this,arguments),this.current=0}var link=$(".com__nav-link"),linkParent=link.parent("li"),section=$(".com__section"),sectionContent=section.find("*"),slides=$(".slides"),switchTab=function(){var p=$(this).parent("li"),i=p.index(),s=section.eq(i),c=s.find("*");return section.removeClass("active"),sectionContent.removeAttr("style"),s.addClass("active"),c.css({transform:"none",opacity:1}),linkParent.removeClass("active"),p.addClass("active"),!1};link.on("click",switchTab),activeFirst(),Reveal.addEventListener("mvcState",function(){slides.css({zoom:"1",height:"100%"}),$("pre code").each(function(i,block){setTimeout(function(){hljs.highlightBlock(block)},100)})}),$(".com .img").off("mouseover").off("mouseout").on("mouseover",function(){$("h2").css("color","#404855")}).on("mouseout",function(){$("h2").css("color","white")}),document.onkeydown=checkKey,TraversableArray.prototype=[],TraversableArray.prototype.constructor=TraversableArray,TraversableArray.prototype.next=function(){var self=this[0],index=++this.current;return this.current==self.length&&(this.current=0),self[index%self.length]},TraversableArray.prototype.prev=function(){var self=this[0],index=--this.current;return this.current+self.length<=0&&(this.current=0),self[(index+self.length)%self.length]};var mvcSlides=new TraversableArray(Array.prototype.slice.call(linkParent))},1e3),document.addEventListener("mvc",function(e){var index=e.detail;null!=index&&$($element).find(".com__nav-list").find("li").eq(index).find("a").trigger("click")})}),app.directive("renderNestedHtml",function($timeout){return{compile:function(element,attrs){var rawHtml=element[0].innerHTML,code=angular.element("<code data-trim></code>");code.text(rawHtml.trim()),element.replaceWith(code)}}}),app.controller("otherFeatures",function($timeout,$element){var mySwiper;Reveal.addEventListener("otherFeatures",function(event){$timeout(function(){null==mySwiper&&(mySwiper=new Swiper($($element).find(".swiper-container"),{speed:1e3,spaceBetween:100,nextButton:".otherFeatures .swiper-button-next",prevButton:".otherFeatures .swiper-button-prev"}))},1e3)},!1),document.addEventListener("otherFeatures",function(e){null!=e.detail&&null!=mySwiper&&mySwiper.slideTo(e.detail,500,!0)})}),app.controller("routing",function($location,$scope,$timeout){Reveal.addEventListener("routing",function(){var url=$location.absUrl();console.log($location.absUrl(),$location.path()),$scope.url=url.replace($location.path(),"/")+"3"},!1),$scope.move=function(){$location.path("/3")}}),app.controller("two_way_db",function($scope){$scope.name="AngularJS",$scope.changeModel=function(){$scope.name="Everybody"}}),app.controller("whatIsAngular",function($timeout,$element){});