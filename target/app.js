var app=angular.module("app",["ngAnimate","ngTouch","angular-carousel","frapontillo.bootstrap-switch","ngMaterial"]);app.config(function($mdThemingProvider){$mdThemingProvider.theme("default").primaryPalette("blue")}),app.controller("ctr",function($scope,$timeout){function registerEvent(){}$scope.getSection=function(section){return"slides/"+section.contain+".html"},$timeout(function(){Reveal.initialize({controls:!0,progress:!0,history:!0,width:1200,height:700,transition:"concave",dependencies:[{src:"lib/js/classList.js",condition:function(){return!document.body.classList}},{src:"plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/zoom-js/zoom.js",async:!0},{src:"plugin/notes/notes.js",async:!0}]}),registerEvent()},3e3)}),app.controller("ctr4",function($scope){$scope.click=function(feature,state){$scope[feature]=state}}),app.controller("ctr5",function($scope){$scope.table1=[{name:"JavaScript",value:"90"},{name:"AngularJS",value:"40"},{name:"PHP",value:"35"},{name:"NodeJS",value:"32"},{name:"Wordpress",value:"30"},{name:"React",value:"28"}]}),app.directive("searchField",function(){return{scope:{value:"@"},template:'<div class="form-inline input-group-lg"><input type="text" ng-model="value" class="nam_text form-control" /><button class="nam_btn btn btn-primary btn-lg" ng-click="onSubmit()" >Search</button></div><b>{{result}}</b>',controller:function($scope){$scope.result="Result: ",$scope.onSubmit=function(){$scope.result="Result: "+$scope.value},$scope.onSubmit()}}}),app.controller("domManipulation",function($scope){$scope.classes=["text-primary","text-danger","text-success"],$scope.class="text-primary",$scope.getClass=function(classString){try{return JSON.parse(classString)}catch(exception){return{}}}}),app.controller("hackathonDemo",function($scope){$scope.list=[{note:"Axon Active",desc:"Awesome"}],$scope.colors=[{color:"white",name:"White"},{color:"#29b6f6",name:"Blue"},{color:"#8bc34a",name:"Light green"},{color:"#cddc39",name:"Lime"}],$scope.isShowList=!0,$scope.addNew=function($event){$event.stopPropagation(),$scope.addNote={},$scope.isShowList=!1,$scope.isShowAdd=!0,$scope.isShowRead=!1},$scope.read=function(item){$scope.selectedNote=item,$scope.isShowList=!1,$scope.isShowAdd=!1,$scope.isShowRead=!0},$scope.create=function(){$scope.list.push($scope.addNote),$scope.showList()},$scope.showList=function(){$scope.isShowList=!0,$scope.isShowAdd=!1,$scope.isShowRead=!1}}),app.controller("liveCodeDirective",function($timeout){var mySwiper;Reveal.addEventListener("liveCodeDirective",function(){null==mySwiper&&($timeout(function(){new Swiper(".live-code-directive .swiper-container",{speed:1e3,spaceBetween:100,nextButton:".live-code-directive .swiper-button-next",prevButton:".live-code-directive .swiper-button-prev"})},1e3),$(".live-code-directive pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1)}),app.controller("liveCodeDom",function($timeout){var mySwiper;Reveal.addEventListener("liveCodeDom",function(){null==mySwiper&&($timeout(function(){new Swiper(".live-code-dom .swiper-container",{speed:1e3,spaceBetween:100,nextButton:".live-code-dom .swiper-button-next",prevButton:".live-code-dom .swiper-button-prev"})},1e3),$(".live-code-dom pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1)}),app.controller("liveCodeInstallation",function($timeout){var mySwiper;Reveal.addEventListener("liveCodeInstallation",function(){null==mySwiper&&($timeout(function(){new Swiper(".installation .swiper-container",{speed:1e3,spaceBetween:100,nextButton:".installation .swiper-button-next",prevButton:".installation .swiper-button-prev"})},1e3),$(".installation pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1)}),app.controller("liveCodeRouting",function($timeout){var mySwiper;Reveal.addEventListener("liveCodeRouting",function(){null==mySwiper&&($timeout(function(){new Swiper(".live-code-routing .swiper-container",{speed:1e3,spaceBetween:100,nextButton:".live-code-routing .swiper-button-next",prevButton:".live-code-routing .swiper-button-prev"})},1e3),$(".live-code-routing pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1)}),app.controller("liveCodeTwoWay",function($timeout){var mySwiper;Reveal.addEventListener("liveCodeTwoWay",function(){null==mySwiper&&($timeout(function(){new Swiper(".live-code-twoway .swiper-container",{speed:1e3,spaceBetween:100,nextButton:".live-code-twoway .swiper-button-next",prevButton:".live-code-twoway .swiper-button-prev"})},1e3),$("pre code").each(function(i,block){hljs.highlightBlock(block)}))},!1)}),app.controller("ctrlMVC",function($timeout){$timeout(function(){function activeFirst(){section.first().addClass("active"),section.first().find("*").css({transform:"none",opacity:1}),linkParent.first().addClass("active")}function checkKey(e){if(e=e||window.event,"38"==e.keyCode){var prev=mvcSlides.prev();$(prev).find("a").trigger("click")}else if("40"==e.keyCode){var next=mvcSlides.next();$(next).find("a").trigger("click")}}function TraversableArray(){console.log(arguments),"number"==typeof arguments[0]?this.length=arguments[0]:this.push.apply(this,arguments),this.current=0}console.log(),console.log("run");var link=$(".com__nav-link"),linkParent=link.parent("li"),section=$(".com__section"),sectionContent=section.find("*"),slides=$(".slides"),switchTab=function(){var p=$(this).parent("li"),i=p.index(),s=section.eq(i),c=s.find("*");return section.removeClass("active"),sectionContent.removeAttr("style"),s.addClass("active"),c.css({transform:"none",opacity:1}),linkParent.removeClass("active"),p.addClass("active"),!1};link.on("click",switchTab),activeFirst(),Reveal.addEventListener("mvcState",function(){slides.css({zoom:"1",height:"100%"}),$("pre code").each(function(i,block){setTimeout(function(){hljs.highlightBlock(block)},100)})}),Reveal.addEventListener("slidechanged",function(event){}),$("img").off("mouseover").off("mouseout").on("mouseover",function(){$("h2").css("color","#404855")}).on("mouseout",function(){$("h2").css("color","white")}),document.onkeydown=checkKey,TraversableArray.prototype=[],TraversableArray.prototype.constructor=TraversableArray,TraversableArray.prototype.next=function(){var self=this[0],index=++this.current;return this.current==self.length&&(this.current=0),self[index%self.length]},TraversableArray.prototype.prev=function(){var self=this[0],index=--this.current;return this.current+self.length<=0&&(this.current=0),self[(index+self.length)%self.length]};var mvcSlides=new TraversableArray(Array.prototype.slice.call(linkParent))},1e3)}),app.directive("renderNestedHtml",function($timeout){return{compile:function(element,attrs){var rawHtml=element[0].innerHTML,code=angular.element("<code data-trim></code>");code.text(rawHtml.trim()),element.replaceWith(code)}}}),app.controller("otherFeatures",function($timeout){var mySwiper;Reveal.addEventListener("otherFeatures",function(event){$timeout(function(){null==mySwiper&&new Swiper(".otherFeatures .swiper-container",{speed:1e3,spaceBetween:100,nextButton:".otherFeatures .swiper-button-next",prevButton:".otherFeatures .swiper-button-prev"})},2e3)},!1)}),app.controller("two_way_db",function($scope){$scope.name="AngularJS",$scope.changeModel=function(){$scope.name="Everybody"}});