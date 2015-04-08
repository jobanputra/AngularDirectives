(function () {

    var mainCtrl = function ($scope) {
        $scope.handlePause = function (e) {
            console.log(e);
            console.log('video was paused');

        };
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();