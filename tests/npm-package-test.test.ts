import { add, multiply, power } from "../src/npm-package-test"
import {expect} from 'chai'
describe("npm-package-test unit tests", ()=>{

    it("adding two positive numbers", () => {
        const actual = add(1,23);
        expect(actual).is.equal(24)
    })

    it("adding one positive and one negative", ()=>{
        const val = add(1, -10);
        expect(val).is.equal(-9);
    })
    
    it("multiplying two positive numbers", ()=>{
        const res = multiply(23, 2);
        expect(res).is.equal(46);
    })

    it("multiplying one positive and one negative number", ()=>{
        const res = multiply(23, -19);
        expect(res).is.lessThan(0)
    })

    it("powers of two positive numbers", ()=>{
        const res = power(2,3);
        expect(res).is.equal(8);
    })

    it("powers of a positive and negative numbers", ()=>{
        const res = power(2, -100);
        expect(res).is.lessThan(1);
    })

    it("Error TestCase", ()=>{
        expect(1).is.equal(23)
    })
    
})