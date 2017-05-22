app.controller("liveCodeDirective", function ($timeout,$element) {
    var mySwiper;
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
        if(e.detail!=null){
           mySwiper.slideTo(e.detail, 500, true); 
        }
    });

})