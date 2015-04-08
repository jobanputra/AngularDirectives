(function () {
    var userInfoCardDirective = function () {

        return {
            templateUrl: "userInfoCard.html",
            restrict: "E",
            replace: true,
            scope: {
                user: "=person",
                initialCollapsed:"@collapsed" //passing values to isolated scope
            }, //isolated scope
            controller: function ($scope) {
                $scope.collapsed = ($scope.initialCollapsed === "true");
                $scope.knightMe = function (user) {
                    user.rank = "Knight";
                };
                $scope.collapse = function(){
                    $scope.collapsed = !$scope.collapsed;
                };
                $scope.removeFriend = function (friend) {
                    var idx = $scope.user.friends.indexOf(friend);
                    if (idx > -1) {
                        $scope.user.friends.splice(idx, 1);
                    }
                };
                $scope.nextState = function () {
                    $scope.user.level++;
                    if ($scope.user.level > 2)
                        $scope.user.level = 0;
                };
            },
            
            
        };
    };
    
    var module = angular.module("angularDirectives");
    module.directive("userInfoCard", userInfoCardDirective);

}());