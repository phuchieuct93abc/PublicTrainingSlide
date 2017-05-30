app.controller('angular2', function ($scope) {

    document.addEventListener('fragment', function (e) {
        if (e.detail == "angular2") {
            $scope.isAngular2 = true;
            $scope.isAngular2_2 = false;


        } else if (e.detail == "angular1") {
            $scope.isAngular2 = false;
            $scope.isAngular2_2 = false;


        } else if (e.detail == "angular2_2") {
            $scope.isAngular2_2 = true;

        }
        $scope.$evalAsync();

    })
})