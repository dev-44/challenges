/****************************************************************
 *             CODERBYTE VOWEL COUNT CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function VowelCount(str) take the str string        *
 * parameter being passed and return the number of vowels the   *
 * string contains (ie. "All cows eat grass and moo" would      *
 * return 8). Do not count y as a vowel for this challenge.     *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello"                                             *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "coderbyte"                                         *
 * Output 2: 3                                                  *
 *                                                              *                                                            *
 ***************************************************************/

function vowelCount(str) {
   let vowelCount = 0
   let vowelRegex = /[aeiouAEIOU]/g

   for(let i=0; i<str.length; i++){
      if(str[i].match(vowelRegex)) {
         vowelCount++
      }
   }

   console.log(vowelCount)
}

vowelCount('coderbyte')
vowelCount('hello')