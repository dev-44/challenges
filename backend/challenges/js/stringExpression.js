/*
String Expression
Have the function StringExpression(str) read the str parameter being passed which will contain the written out version of the numbers 0-9 and the words "minus" or "plus" and convert the expression into an actual final number written out as well. For example: if str is "foursixminustwotwoplusonezero" then this converts to "46 - 22 + 10" which evaluates to 34 and your program should return the final string threefour. If your final answer is negative it should include the word "negative."
Examples
Input: "onezeropluseight"
Output: oneeight
Input: "oneminusoneone"
Output: negativeonezero 
*/

function StringExpression(str) { 

   const expressions = {
     zero: '0',
     one: "1",
     two: "2",
     three: "3",
     four: "4",
     five: "5",
     six: "6",
     seven: "7",
     eight: "8",
     nine: "9",
     plus: "+",
     minus: "-"
   }
 
   var array = str.split('')
   var temp = ''
   var num1 = '' 
   var num2 = '' 
   var operation = '' 
   var result = ''
   //console.log(array)
 
   array.forEach(letter => {
     temp += letter
 
     for(const key in expressions) {
       if(temp === key) {
 
         if(temp == 'plus' || temp == 'minus') {
 
             operation = expressions[key]
             temp = ''
         } else {
 
           if(operation === '') {
 
             num1 += expressions[key]
             temp = ''
 
           } else {
 
             num2 += expressions[key]
             temp = ''
           }
         }
       }
     }
   })
 
   num1 = parseInt(num1)
   num2 = parseInt(num2)
   
   if(operation === '+') {
     result = num1 + num2
   } else {
     result = num1 - num2
   }
 
 
   var array2 = []
   result = result.toString().split('')
 
   result.forEach(number => {
     for(const key in expressions){
       if(number === expressions[key]) {
         if(number === '-' && array2.length === 0) {
           array2.push('negative')
           continue
         }
         array2.push(key)
       }
     }
   })
 
   array2 = array2.join('')
 
 
   // code goes here  
   return array2.toString(); 
 
 }
    
 // keep this function call here 
 console.log(StringExpression(readline()));

/*

1. For input "foursixminustwotwoplusonezero" the output was incorrect. The correct output is threefour

2. For input "twoplustwoplusthree" the output was incorrect. The correct output is seven

3. For input "twoplustwoplusthreeminusseven" the output was incorrect. The correct output is zero

4. For input "eightplustwominusfive" the output was incorrect. The correct output is five

5. For input "oneminusoneminusone" the output was incorrect. The correct output is negativeone
*/