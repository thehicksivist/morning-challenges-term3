/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If you're having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
// Your code here

}
  
// Your tests here
describe('Counts even numbers', function () {

    context('When there is only even numbers in the array', function () {
      it('Should return 3', function () {
        assert.equal(3, countEvens([2,4,6]))
        })
      it('Should return 4', function () {
        assert.equal(4, countEvens([8, 16, 32, 64]))
        })
    })    

    context('When there is even and odd numbers in the array', function () {
        it('Should return 3', function () {
          assert.equal(3, countEvens([2,5,6]))
          })
        it('Should return 4', function () {
          assert.equal(4, countEvens([8, 16, 33, 64]))
          })
      })   

      context('When there is only odd numbers in the array', function () {
        it('Should return 0', function () {
          assert.equal(0, countEvens([3,5,7]))
          })
        it('Should return 0', function () {
          assert.equal(0, countEvens([9, 11, 13]))
          })
      })   

      context('When there is an empty array', function () {
        it('Should return 0', function () {
          assert.equal(0, countEvens([]))
          })
      }) 

      context('When there are strings in the array', function () {
        it('Should return 0 if only strings', function () {
            assert.equal(0, countEvens(['one', 'two', 'three']))
            })
        it('Should return 2 if there are even numbers', function () {
        assert.equal(2, countEvens(['one', '2', 'three', '4']))
            })
        it('Should return 1 if there are even and odd numbers', function () {
            assert.equal(2, countEvens(['one', '2', 'three', '5']))
            })
        it('Should return 0 if there are only odd numbers', function () {
            assert.equal(2, countEvens(['one', '1', 'three', '3']))
            })      
      }) 
    
})