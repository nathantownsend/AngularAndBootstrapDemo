// use global object and call directive method
// gets translated to snake case, employee-form in the html
angularFormsApp.directive('employeeForm',
    function () {

        return {
            restrict: 'E',  // use directive only as an element(E)
            templateUrl: 'app/EmployeeForm/efTemplate.html' // use this template
        }

    });

