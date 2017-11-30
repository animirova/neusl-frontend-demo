(function () {
    angular
        .module("NEUSL")
        .controller("editEmploymentController", editEmploymentController);

    function editEmploymentController($scope, $filter, $routeParams) {
        var model = this;
        model.editEmployment = editEmployment;

        function init() {

        }
        init();

        function editEmployment() {

        }


    }
})();