
// use global app variable, and call the controller method to create a controler called efController, also pass a function to get
// a scope that uses a reference to service. Sets employee to services employee field
// routeParams passes data
angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        // if the route params contains an id parameter then get the data for the employee, else it is a new employee
        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };


        // make a deep copy for cancel / submit operations
        $scope.editableEmployee = angular.copy($scope.employee);


        $scope.departments = [
                "Engineering",
                "Marketing",
                "Finance",
                "Administration"
        ];


        $scope.submitForm = function () {
            if ($scope.editableEmployee.id == 0) {
                // insert employee
                DataService.insertEmployee($scope.editableEmployee);
            } else {
                // update employee
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
        }

        $scope.cancelForm = function () {
            $window.history.back();
        }


    });