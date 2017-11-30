(function () {
    angular
        .module("neuSLDirectives", [])
        .directive("slNavbar", slNavbar);

    function slNavbar($http) {
        return {
            templateUrl: "views/home/templates/navbar.component.client.html",
            controller: 'navbarController',
            controllerAs: 'navController'
            // link : linkFunction
        }
    }

})();