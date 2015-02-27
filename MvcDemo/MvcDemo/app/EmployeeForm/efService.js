

// the factory method creates a service, named efService 
angularFormsApp.factory('efService',

    // pass a function to return some sample data for an employee
    function () {
        return {
            employee: {
                fullName: "Nate Townsend",
                notes: "This is some notes...",
                department: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }

    });