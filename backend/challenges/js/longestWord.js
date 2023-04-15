/* First convert the string into an array with only the words.
Then compare each words.length (after removing special characters from word) and sort these lengths in descending order.
return the first element from that sorted array. */

/*
function longestWord(str) {
   let arr = str.split(" ").sort(function(a,b) {
      return b.replace(/[^a-zA-Z]/g,'').length - a.replace(/[^a-zA-Z]/g,'').length
   })

   console.log(arr)

}

longestWord("This is a test.")
*/

/* function LongestWord(sen) { 

  // code goes here
  var longest = ''
  var maxlength = 0

  sen = sen.replace(/[^0-9A-Za-z\s]+/g, '') 
  let array = sen.split(' ')
  array.forEach(word => {
    if(word.length > maxlength) {
      maxlength = word.length
      longest = word
    }
  })

  return longest

} */

function LongestWord(sen) { 

  return sen.replace(/[^0-9A-Za-z\s]+/g, '').split(' ').sort(function(a,b) {
    return b.length - a.length
  })[0]

}
    
 // keep this function call here 
 console.log(LongestWord(readline()));