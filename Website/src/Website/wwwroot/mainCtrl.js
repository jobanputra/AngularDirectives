(function () {

    var mainCtrl = function ($scope) {
    	$scope.user1 = {
    		name: "Luke",
			selected:true
    	};
    	$scope.size = 150;

		
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();