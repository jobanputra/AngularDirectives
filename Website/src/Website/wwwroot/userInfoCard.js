(function () {
    var userInfoCard = function () {

        return {
            templateUrl: "userInfoCard.html",
            restrict: "E",
            replace: true,
            controller: function ($scope) {
                $scope.knightMe = function (user) {
                    user.rank = "Knight";
                };

            }
        };
    };
    
    var module = angular.module("angularDirectives");
    module.directive("userInfoCard", userInfoCard);

}());