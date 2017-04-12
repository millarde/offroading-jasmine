var add=require("../app/math/add.js");
var subtract=require("../app/math/subtract.js");

describe("Expressions",function(){
  it("Use add and subrtact together",function() {
    var value=add.AddNumbers(2,9)-subtract.SubtractAfromB(4,8);
    expect(value).toBe(7);
  });
});
