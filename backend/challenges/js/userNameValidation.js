/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a 
valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

/* function CodelandUsernameValidation(str) { 
  
  // code goes here

  if(str.length < 4 || str.length > 25) {
    return false 
  }
  
  var first = str[0]
  var last = str[str.length-1]
  console.log(first)
  console.log(last)


  if(/[a-z]/i.test(first) === false || /_/.test(last)) {
    return false
  }

  if(/[a-zA-Z0-9_]/g.test(str)) {
    return true
  } else {
    return false
  }

} */

function CodelandUsernameValidation(str) { 

  return /^[A-Za-z][A-Za-z0-9_]{2,23}[^_]$/g.test(str)
}


 console.log(CodelandUsernameValidation("__bbbbbbb"))
 console.log(CodelandUsernameValidation("b3333434_"))
 console.log(CodelandUsernameValidation("oooooooooooooooooo________a"))
 console.log(CodelandUsernameValidation("123abc444"))
 console.log(CodelandUsernameValidation("a______b_________555555555555aaaa"))