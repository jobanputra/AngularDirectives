(function () {

    var mainCtrl = function ($scope) {
        $scope.message = "Hello from controller";
        $scope.user1 = {
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
            ],
            level:0
        };
        $scope.user2 = {
            name: "Hans Solo",
            address: {
                street: "PO Box 123",
                city: "Mos Eisley",
                planet: "Tattoine"
            },
            friends: [
                "Princess Leia",
                "Luke Skywalker",
                "Chewbacca"
            ],
            level:1
        };

    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();