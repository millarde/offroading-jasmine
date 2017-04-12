var app=require("./subtract.js");

describe("Addition",function(){
  it("The function should add 2 numbers",function() {
    var value=app.SubtractAfromB(5,11);
    expect(value).toBe(6);
  });
});
