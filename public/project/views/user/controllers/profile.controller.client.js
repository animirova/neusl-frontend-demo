(function () {
    angular
        .module("NEUSL")
        .controller("profileController", profileController);

    function profileController($location, userService, paramUser, $route) {
        var model = this;

        //declare functions

        function init() {
            model.user = userService.getUser();


        }

        init();
    }
})();
