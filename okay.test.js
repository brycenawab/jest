/** multiply */
const multiplication = reqiure("./okay")
describe("multiplication" , ()=>{
    test("multiplies x*y to equal x*y" , ()=> {
        expect(multiplication(x,y)).toBe(x*y)
    })
})

/**concat */
const conCatOdds = require("./okay")
describe("conCatOdds" , ()=>{
    test("returns odd number to equal [9,7,5,3] and [1,3]" , ()=>{
        expect(conCatOdds(a,b)).toBe([9,7,5,3],[1,3])
    })
})

/** shopping cart */