/* Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers,
letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that
add up to 10. If so, then your program should return the string true, otherwise it should return the string false. 
If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is  "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 
question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

Examples
Input: "aa6?9"
Output: false

Input: "acc?7??sss?3rr1??????5"
Output: true 
*/

function QuestionsMarks(str) {

  let questionMarksCount = 0
  let temp = 0
  let flag = false

  for(var i=0; i<str.length; i++) {
    if(!isNaN(str[i])) {
      //console.log('Is a number: ' +str[i])
      //console.log(temp + Number(str[i]))
      if(temp + Number(str[i]) === 10) {
        if (questionMarksCount !== 3) return false
        else flag = true
      }
      temp = Number(str[i])
      //console.log('TEMP: ' + temp)
      questionMarksCount = 0
    } else if (str[i] === '?') questionMarksCount++
    //console.log('\n')
  }

  // code goes here  
  return flag; 
 
}