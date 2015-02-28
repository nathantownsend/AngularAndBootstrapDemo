
// create a global variable to contain the application
// ngRoute is a new dependency added with the script reference to Scripts/angular-route.min.js
var angularFormsApp = angular.module('angularFormsApp', ["ngRoute"]);

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
angularFormsApp.controller("HomeController",
    function ($scope, $location, DataService) {
        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm');
        };
        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };
    });