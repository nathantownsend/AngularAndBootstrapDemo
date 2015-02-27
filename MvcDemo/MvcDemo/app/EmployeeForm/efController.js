
// use global app variable, and call the controller method to create a controler called efController, also pass a function to get
// a scope that uses a reference to service. Sets employee to services employee field
angularFormsApp.controller('efController',
    function efController($scope, efService) {
        // sets the scope variable for employee to service employee
        $scope.employee = efService.employee;
    });