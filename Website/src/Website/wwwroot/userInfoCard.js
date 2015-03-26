(function () {
    var userInfoCard = function () {

        return {
            templateUrl: "userInfoCard.html",
            restrict: "E",
            replace:true
        };
    };
    
    var module = angular.module("angularDirectives");
    module.directive("userInfoCard", userInfoCard);

}());