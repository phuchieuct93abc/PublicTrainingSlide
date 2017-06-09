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