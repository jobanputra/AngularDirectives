(function () {

    var mainCtrl = function ($scope) {
        $scope.handlePause = function () {
            console.log('video was paused');

        };
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();