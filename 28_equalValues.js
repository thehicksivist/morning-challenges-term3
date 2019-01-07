/*
Use the equalValues function to return true if
two arguments hold exactly the same values and 
false if they do not.
The supplied arguments will be objects, arrays and strings.

Examples:

{kanye:7, west:2} & {kanye:7, west:2} => true 
{adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
[{a:4},{b:3}] & [{a:4},{b:3}]) => true
{a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
'Alright' & 'Alright' => true
*/

const equalValues = (value1, value2) => {
    // Your code below

    return JSON.stringify(value1) == JSON.stringify(value2)

    // create a separate function for "check", which returns true or false on a check,
    // so at any point in any iteration it will return false
    let check = function(num1, num2) {
        if (num1 != num2) {
            return false
        }
    }

    if (typeof value1 === 'object' && yourVariable !== null) {
        // case object
    } else if (value1.constructor == Array) {
        // case array
    } else {
        return false
    }

     // if array, loop and check each value 
    // if not array, check and move to next key

    // loop checks
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        check(element, array2[i])
        
    }
    
}

const assert = require('assert')
describe('equalValues tests', () => {
    it('Should return true if the values are the same', () => {
        assert.equal(equalValues({a:[2,3],b:[4]},{a:[2,3],b:[4]}), true)
        assert.equal(equalValues({adam:3, laura:4},{adam:3, laura:4}), true)
    })
    it('Should return false if the values are not the same', () => {
        assert.equal(equalValues([{a:3},{b:4}],[{a:'3'},{b:'4'}]), false)
        assert.equal(equalValues({adam:3, laura:4, maisie:2},{adam:3, laura:4}), false)
        assert.equal(equalValues({a:3},{b:4},{b:3},{a:4}), false)
        assert.equal(equalValues({a:3,b:2},{a:3},{b:2}), false)
    })
// -------------------------------------------------------------------
//                         Beast Mode - uncomment lines below
// -------------------------------------------------------------------
    // it('Beast mode: Should return false if the values are not in the same order', () => {
    //     assert.equal(equalValues({a:3,b:2},{b:2,a:3}), false)
    // })
    // it('Beast mode++: Should return true if one value is in JSON', () => {
    //     assert.equal(equalValues({a:3,b:4},{{"a":"4"},{"b":"4"}}), true)
    // })
})

