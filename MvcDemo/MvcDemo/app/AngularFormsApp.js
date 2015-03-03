
// create a global variable to contain the application
// ngRoute is a new dependency added with the script reference to Scripts/angular-route.min.js
// ui-bootstrap service angular-ui/ui-bootstrap-tpls.min.js documented here: http://angular-ui.github.io/bootstrap/#/modal
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

// angular js routing
angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", { 
            templateUrl: "app/Home.html", 
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});


// adding HomeController here because this is a demo app, in real world would likely create a separate js file for the controller
// $modal is the ui boot strap service
angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService) {

        $scope.showCreateEmployeeForm = function () {
            // use the ui-bootstrap modal service instead of loading in the form
            $modal.open({
                templateUrl: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController'
            });
        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };
    });