app.controller("liveCodeTwoWay", function ($scope, $timeout, $element) {
    //demo
    $scope.demoList = []
    $scope.demoClick = function () {
        var newItem = {
            name: $scope.demoInput,
            time: new Date()
        }
        $scope.demoList.push(newItem)

    }
    $scope.model = {}
    document.addEventListener('fragment', function (e) {
        console.log("fire",e.detail)
        if (e.detail == "two-way-slide") {
            $scope.model.hide = true;

        } else if (e.detail == "two-way-demo") {
                        console.log("hien")

            $scope.model.hide = false;


        }
        $scope.$evalAsync();

    })
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
        if (e.detail != null && mySwiper != null) {
            mySwiper.slideTo(e.detail, 500, true);
        }
    });


})