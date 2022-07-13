
it('should calculate the monthly rate correctly', function () {
  const values= { amount:2000, years: 20, rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('13.20');
});


it("should return a result with 2 decimal places", function() {
  const values= {amount:30000, years: 12, rate:7
  };
  expect(calculateMonthlyPayment(values)).toEqual('308.51');
  // ..
});

/// etc
