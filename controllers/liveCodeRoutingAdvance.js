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