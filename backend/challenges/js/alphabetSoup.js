
/****************************************************************
 *             CODERBYTE ALPHABET SOUP CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AlphabetSoup(str) take the str string      *
 * parameter being passed and return the string with the        *
 * letters in alphabetical order (ie. hello becomes ehllo).     *
 * Assume numbers and punctuation symbols will not be included  *
 * in the string.                                               *
 *                                                              *
 * Examples                                                     *
 * Input 1: coderbyte                                           *
 * Output 1: bcdeeorty                                          *
 *                                                              *
 * Input 2: hooplah                                             *
 * Output 2: ahhloop                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 26.0% of users who solved this   *
 * challenge.                                                   *
 ***************************************************************/

function alphabetSoup(str){
   return str.toLowerCase().split('').sort().join('')
}

console.log(alphabetSoup('hello'))
console.log(alphabetSoup('hooplah'))