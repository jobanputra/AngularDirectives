(function () {

    var mainCtrl = function ($scope) {
        $scope.message = "Hello from controller";
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();