(function () {
    angular
        .module("NEUSL")
        .controller("loginController", loginController);

    function loginController($window, $location, userService, $rootScope) {
        var model = this;
        model.login = login;
        model.onClickRegister = onClickRegister;

        function init() {
        }
        init();

        function onClickRegister() {
            $('.nav a[href="#Register"]').tab('show');
        }

        function login(user) {
            if(!user) {
                model.errorMessage = "Please fill in username and password!";
                $('.modal').effect('shake');

                return;
            }
            userService
                .login(user.username, user.password)
                .then(function (_user) {

                    $('.modal').modal('toggle');
                    $window.location.reload();

                }, function (err) {
                    if(err.status === 401) {
                        model.errorMessage = "User not found. Check username and password again";
                    } else if(err.status === 400) {
                        model.errorMessage = "Please fill in username and password!";
                    } else {
                        model.errorMessage = "Internal Server Error.";
                    }
                    $('.modal').effect('shake');
                });
        }
    }
})();
