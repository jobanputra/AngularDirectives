(function () {

    var mainCtrl = function ($scope) {
    	$scope.message = "Hello from controller";
    	$scope.answers = {
			baseLocation:"Yavin 4",
    	}
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();