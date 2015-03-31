(function () {

    var removeFriendDirective = function () {
        return {
            templateUrl: "removeFriend.html",
            restrict: "E",
            replace: true,
            scope:{
                notifyParent: "&method"
            },
            controller: function ($scope) {
                $scope.removing = false;
                $scope.startRemove = function () {
                    $scope.removing = true;
                };
                $scope.cancelRemove = function () {
                    $scope.removing = false;
                };
                $scope.confirmRemove = function () {
                    $scope.notifyParent();
                };
                

            }
        };
    };

    var module = angular.module("angularDirectives");
    module.directive("removeFriend", removeFriendDirective);
})();