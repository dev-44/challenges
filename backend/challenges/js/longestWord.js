/* First convert the string into an array with only the words.
Then compare each words.length (after removing special characters from word) and sort these lengths in descending order.
return the first element from that sorted array. */

function longestWord(str) {
   let arr = str.split(" ").sort(function(a,b) {
      return b.replace(/[^a-zA-Z]/g,'').length - a.replace(/[^a-zA-Z]/g,'').length
   })

   console.log(arr)

}

longestWord("This is a test.")