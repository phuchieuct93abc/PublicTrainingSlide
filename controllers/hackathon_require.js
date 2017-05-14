app.controller("hackathonDemo", function ($scope) {

    $scope.list = [
        {note: "Axon Active",
            desc: "Awesome"

        }



    ]
    $scope.colors = [
        {
            color: "white",
            name: "White"
        },
        {
            color: "#29b6f6",
            name: "Blue"
        },
        {
            color: "#8bc34a",
            name: "Light green"
        },
        {
            color: "#cddc39",
            name: "Lime"
        }

    ]

    $scope.isShowList = true;
    $scope.addNew = function ($event) {
        $scope.originalItem = null
        $event.stopPropagation();
        $scope.isShowList = false;
        $scope.isShowAdd = true;
        $scope.isShowRead = false;
        $scope.addNote = {}

    }
    $scope.edit = function (item) {
        $scope.originalItem = item;
        $scope.addNote = angular.copy(item);
        $scope.isShowList = false;
        $scope.isShowAdd = true;
        $scope.isShowRead = false;

    }

    $scope.read = function (item) {
        $scope.selectedNote = item;
        $scope.isShowList = false;
        $scope.isShowAdd = false;
        $scope.isShowRead = true;

    }
    $scope.create = function () {
        if (   $scope.originalItem == null) {
            $scope.list.push($scope.addNote)

        } else {
            console.log("edit")
            $scope.originalItem.note = $scope.addNote.note
            $scope.originalItem.desc = $scope.addNote.desc
            $scope.originalItem.color = $scope.addNote.color
        }
        $scope.originalItem = null
        $scope.showList();
    }
    $scope.showList = function () {
        $scope.isShowList = true;
        $scope.isShowAdd = false;
        $scope.isShowRead = false;
    }


})