(function () {

    var mainCtrl = function ($scope) {
    	$scope.user1 = {
    		name: "Luke",
			selected:true
    	};

		
    };

    var module = angular.module("angularDirectives");
    module.controller("mainCtrl", mainCtrl);

})();