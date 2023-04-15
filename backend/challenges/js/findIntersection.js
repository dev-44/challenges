/* 
Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false. 

Examples
Input:   
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10  
*/

function FindIntersection(strArr) { 

   // code goes here
   let str1 = strArr[0].split(', ')
   let str2 = strArr[1].split(', ')

   let result = str1.filter(a => str2.find(b => b === a))
   return result !== '' ? result.join('') : 'false'

   //let match = str1.filter(num => str2.indexOf(num) !== -1)


/*    match = match.join().trim()

   if(match !== '') {
      return match; 
   } else return false */

}