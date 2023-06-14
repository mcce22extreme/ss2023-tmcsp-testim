// Override default test data to add more test cases
// the example in the docs is not a complete file: https://help.testim.io/docs/configuring-data-driven-tests-using-the-config-file
// here is a complete example file: https://help.testim.io/docs/configuration-file-run-hooks
exports.config = {
  beforeSuite: function (suite) {
    return {
      overrideTestData: {                 
        "e2e-insurance-calc": [
          {
            "make": "Audi",
            "year": "2010",
            "listprice": "45000",
            "fuel": "DieselFuel",
            "performance": "120",
            "yearlymileage": "10000",
          }
        ]
      }
    }    
  }
}