(function () {

    var addressDirective = function () {
        return {
            restrict: "E",
            templateUrl: "address.html",
            scope:true, //inherited scope
            controller: function ($scope) {
                $scope.collapsed = false;
                $scope.collapseAddress = function () {
                    $scope.collapsed = true;
                };
                $scope.expandAddress = function () {
                    $scope.collapsed = false; 
                }
            }
        };
    };

    var module = angular.module("angularDirectives");
    module.directive("address", addressDirective);


})();