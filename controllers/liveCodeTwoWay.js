app.controller("liveCodeTwoWay", function ($timeout,$element) {
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
        if (e.detail != null) {
            mySwiper.slideTo(e.detail, 500, true);
        }
    });


})