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