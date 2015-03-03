

// the factory method creates a service, named efService 
// broadened from efService to be more of a realistic application data service
angularFormsApp.factory('DataService',

    // uses the revealing module pattern to define the output and return the defining object
    function () {
        // pass a function to return some sample data for an employee    
        var getEmployee = function (id) {
            if (id == 123) {
                // return a hard coded employee object that would come from the server
                return {
                    id: 123,
                    fullName: "Nate Townsend",
                    notes: "This is some notes...",
                    department: "Administration",
                    dateHired: "3/2/2015",
                    breakTime: "March 2 2015 11:14 PM",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                }
            }

            return undefined;
        }

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        // this is the data service object that gets returned
        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };

    });


