(function () {

    var mainCtrl = function ($scope) {
        $scope.message = "Hello from controller";
        $scope.user = {
            name: "Luke Skywalker",
            address: {
                street: "PO Box 123",
                city: "Secret Rebel Base",
                planet: "Yavin 4"
            },
            friends: [
                "Princess Leia",
                "Hans Solo",
                "Chewbacca"
            ]
        };
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();