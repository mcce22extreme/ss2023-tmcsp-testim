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
          },
          {
            "make": "Tesla",
            "year": "2019",
            "listprice": "63000",
            "fuel": "Electric",
            "performance": "300",
            "yearlymileage": "10000",
          },
          {
            "make": "BMW",
            "year": "2013",
            "listprice": "55000",
            "fuel": "Petrol",
            "performance": "140",
            "yearlymileage": "12000",
          }
        ]
      }
    }    
  }
}