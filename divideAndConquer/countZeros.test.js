const countZeros = require("./countZeros")

describe("#countZeroes", function(){
  it("counts the number of zeroes", function(){
    expect(countZeros([1, 1, 1, 1, 0, 0])).toBe(2)
    expect(countZeros([1, 0, 0, 0, 0])).toBe(4)
    expect(countZeros([0, 0, 0])).toBe(3)
    expect(countZeros([1, 1, 1, 1])).toBe(0)
  })
})
