/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

/* function moveZeros(arr) {
    let counter = 0
    let aux = arr.filter((el) => el !== 0)
    
    for(let i=1; i = arr.length - aux.length; i++) {
      aux.push(0)
    }
    
    return aux 
} */

var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }