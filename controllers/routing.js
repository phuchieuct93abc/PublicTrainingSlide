app.controller("routing", function ($location, $scope, $timeout) {
    Reveal.addEventListener('routing', function () {
        var url = $location.absUrl();
        console.log($location.absUrl(), $location.path())
        $scope.url = url.replace($location.path(), "/") + "3";
    }, false);




    $scope.move = function () {
        $location.path("/3")

    }


})