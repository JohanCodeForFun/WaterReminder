const waterCounter = require("../waterCounter");

describe("waterCounter", () => {
  test("should return 0 if no glasses of water has been drunk", () => {
    expect(waterCounter(0)).toBe(0);
  });

  test("should return 3 if 3 glasses of water has been drunk", () => {
    expect(waterCounter(3)).toBe(3);
  });
  
  test("should return 5 if 5 glasses of water has been drunk", () => {
    expect(waterCounter(5)).toBe(5);
  });

  test("should return 5 if 8 glasses of water has been drunk", () => {
    expect(waterCounter(8)).toBe(5);
  });

});
