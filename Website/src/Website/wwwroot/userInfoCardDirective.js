(function () {
    var userInfoCardDirective = function () {

        return {
            templateUrl: "userInfoCard.html",
            restrict: "E",
            replace: true,
            scope: {
                user:"="
            }, //isolated scope
            controller: function ($scope) {
                $scope.collapsed = false;
                $scope.knightMe = function (user) {
                    user.rank = "Knight";
                };
                $scope.collapse = function(){
                    $scope.collapsed = !$scope.collapsed;
                };
            },
            
            
        };
    };
    
    var module = angular.module("angularDirectives");
    module.directive("userInfoCard", userInfoCardDirective);

}());