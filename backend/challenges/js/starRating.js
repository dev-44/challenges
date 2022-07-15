/* Star Rating Have the function StarRating(str) take the str parameter being passed which will be an average rating between
0.00 and 5.00, and convert this rating into a list of 5 image names to be displayed in a user interface to represent the 
rating as a list of stars and half stars. Ratings should be rounded to the nearest half. There are 3 image file names 
available: "full.jpg", "half.jpg", "empty.jpg". The output will be the name of the 5 images (without the extension), 
from left to right, separated by spaces. For example: if str is "2.36" then this should be displayed by the following image:

So your program should return the string "full full half empty empty". 

Examples 

Input: "0.38" Output: half empty empty empty empty 

Input: "4.5" Output: full full full full half */

const rating = function(str) {
   var arr = []
   let entero = Math.trunc(str)
   let decimal = Number(str) - entero
   var isHalf = false
   console.log(str)
   console.log(entero)
   console.log(decimal)

   if((decimal >= .25 && decimal <= .75)) {
      isHalf = true
   }

   if(decimal > .75) {
      entero++
   }

   for(i = 0; i < 5; i++) {
      var value = i < entero ? "full" : i == entero & isHalf ? "half" : "empty"
      arr.push(value)
    }
   
   return arr
 }

console.log(rating(0.8))
console.log(rating(1.8))
console.log(rating(4.8))
console.log(rating(0.5))
console.log(rating(3))
console.log(rating(5))
console.log(rating(6))
console.log(rating(2.9))