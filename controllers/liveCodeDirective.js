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