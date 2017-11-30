(function () {
    angular
        .module("NEUSL")
        .controller("newPositionController", newPositionController);

    function newPositionController($scope, $filter, $routeParams) {
        var model = this;

        function init() {
            // dummy data to display some things.
            model.employment = {};
            model.position = {"name" : "a job", "partner" : "a partner"};

            // to set default date to today
            model.employment.date = $scope.date_rdv = new Date();
        }
        init();


    }
})();