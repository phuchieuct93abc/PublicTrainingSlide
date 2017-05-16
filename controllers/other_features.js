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