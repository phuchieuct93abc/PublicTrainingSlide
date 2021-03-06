app.controller("liveCodeRouting", function ($scope,$timeout,$element) {
    var mySwiper;
      document.addEventListener('fragment', function (e) {
        if (e.detail == "routing-slide") {
            $scope.hide = true;

        } else if (e.detail == "routing-demo") {

            $scope.hide = false;


        }
        $scope.$evalAsync();

    })
    Reveal.addEventListener('liveCodeRouting', function () {
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
    document.addEventListener("liveCodeRouting", function (e) {
        if(e.detail!=null && mySwiper!=null){
            mySwiper.slideTo(e.detail, 500, true);
        }
    });

})