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