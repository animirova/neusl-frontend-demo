(function () {
    angular
        .module("NEUSL")
        .controller("editProfileController", editProfileController);

    function editProfileController($location, $route) {
        var model = this;

        //declare functions

        function init() {
            model.user = {"email" : "testemail@gmail.com"};

        }

        init();
    }
})();