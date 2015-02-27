
// use global app variable, and call the controller method to create a controler called efController, also pass a function to get
// a scope that uses a reference to service. Sets employee to services employee field
angularFormsApp.controller('efController',
    function efController($scope, efService) {

        // this is the model for employee
        $scope.employee = efService.employee;


        $scope.departments = [
                "Engineering",
                "Marketing",
                "Finance",
                "Administration"
        ];

        $scope.submitForm = function () {
            alert("Submitted");
        }

        // is accessed with ng-model in form for 2-way binding
        // do not use ng-bind or {{ }} for 2 way binding, they are for 1-way binding only
    });