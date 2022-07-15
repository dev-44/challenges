/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" then your program should return the string 
"sredoC dna dlroW olleH". */

function firstReverse(str) {
   let reverse = ''

   /*
   for(var i = str.length-1; i>=0; i--){
      reverse += str[i]
   }
   */

   reverse = str.split('').reverse().join().replace(/,/g, '')
   //console.log(reverse)

}

console.log(firstReverse("Hello World and Coders"))