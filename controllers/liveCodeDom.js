app.controller("liveCodeDom", function ($scope,$timeout,$element) {
    var mySwiper;
    $scope.classes = [{
            name:"Text danger",
            className:"text-danger"},
        {
            name:"Text success",
            className:"text-success"},
        {
            name:"Text primary",
            className:"text-primary"}
    ]

    $scope.submit=function(){alert('Register successfully!')}
    Reveal.addEventListener('liveCodeDom', function () {
        if (mySwiper == null) {
            $timeout(function () {
                mySwiper = new Swiper($($element).find('.swiper-container'), {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-dom .swiper-button-next",
                    prevButton: ".live-code-dom .swiper-button-prev",
             

                })
            }, 1000);
            $('.live-code-dom pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);
   document.addEventListener("liveCodeDom", function (e) {
        if(e.detail!=null && mySwiper!=null){
           mySwiper.slideTo(e.detail, 500, true); 
        }
    });

})