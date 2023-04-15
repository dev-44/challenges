/*
SIMPLE SYMBOLS - String Manipulation / Regular expression

Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by 
either returning the string true or false. The str parameter will be composed of + and = symbols with several characters 
between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
So the string to the left would be false. The string will not be empty and will have at least one letter.

Examples
-------------------
Input: "+d+=3=+s+"
Output: true

Input: "f++d+"
Output: false
*/

function SimpleSymbols(str) { 

  // code goes here
  for(let i=0; i< str.length; i++) {
    let l = str[i]
    if(/[a-z]/gi.test(l)) {
      var index = str.indexOf(l)
      if(str[index-1] !== '+' || str[index+1] !== '+') {
        return false
      }
    }
  }
  

  return true
}

function SimpleSymbols(str) {
  let reWrongSequence = /([^+]|^)[a-z]|[a-z]([^+]|$)/i;
  return !reWrongSequence.test(str);
}