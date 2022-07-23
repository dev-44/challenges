  /**
   * LETTER CAPITALIZE - String Manipulation
   * Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and 
   * capitalize the first letter of each word. Words will be separated by only one space.
   * Sample Test Cases
   *
   * Input:"hello world"
   * Output:"Hello World"
   *
   * Input:"i ran there"
   * Output:"I Ran There"
   *
   * @param {string} sentence A string to be converted into Capitalised Case
   * @return {string} A sentence in Capitalised Case
   */

   function capitalize(str) {
      console.log(str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' '))
   }

   capitalize('hello world')