/*
LETTER CHANGES - String Manipulation

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Examples
---------------------
Input: "hello*3"
Output: Ifmmp*3

Input: "fun times!"
Output: gvO Ujnft! 
*/

/* function LetterChanges(str) { 

  // code goes here
  let nextL = []
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  for(let i=0; i < str.length; i++) {
    if(alphabet.indexOf(str[i]) !== -1) {
      var index = alphabet.indexOf(str[i])
      nextL.push(alphabet[index + 1])
    } else {
      nextL.push(str[i])
    }
  }

  nextL = nextL.join('')

  let changed = nextL.replace(/[aeiou]/g, (v) => {
    return v.toUpperCase()
  })

  return changed
} */

function LetterChanges (str) {
  return result = str.split('').map(w => {
    return alphabet.indexOf(w) !== -1 ? alphabet[alphabet.indexOf(w) + 1] : w
  }).join('').replace(/[aeiou]/g, (v) => v.toUpperCase())
}