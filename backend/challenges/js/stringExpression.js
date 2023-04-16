/*
String Expression
Have the function StringExpression(str) read the str parameter being passed which will contain the written out version 
of the numbers 0-9 and the words "minus" or "plus" and convert the expression into an actual final number written out 
as well. For example: if str is "foursixminustwotwoplusonezero" then this converts to "46 - 22 + 10" which evaluates to 
34 and your program should return the final string threefour. If your final answer is negative it should include the 
word "negative."

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

  let arrLet = str.split('')
  let arrExp = []
  let arrNum = []
  let temp = ''
  let number = ''
  let calc = 0

  arrLet.map(letter => {
    temp += letter
    //console.log(temp)

    for(const key in expressions) {
      //console.log(key)
      if (temp === key) {
        arrExp.push(temp)
        temp = ''
      }
    }
  })

  arrExp.map((exp, index) => {
    for(const key in expressions) {
      if(exp === key) {

        if(exp === 'minus' || exp === 'plus') {
          arrNum.push(number)
          number = ''
          exp === 'minus' ? arrNum.push('minus') : arrNum.push('plus')
          return
        }

        number += expressions[key]

        if(index === (arrExp.length - 1)) {
          arrNum.push(number)
          number = ''
        }
      }
    }
  })

  console.log(arrExp)
  console.log(arrNum)

  let operat = ''

  arrNum.map((el,index) => {

    if(index === 0) {
      calc = parseInt(el)
      return
    }

    //index === 0 ? calc = parseInt(el) : null

    if(el ==='minus' || el === 'plus') {
      el === 'minus' ? operat = 'minus' : operat = 'plus'
      return
    }

    operat === 'minus' ? calc -= parseInt(el) : calc += parseInt(el)
  })

  console.log(calc)

  let result = calc.toString().split('')
  console.log(result)
  
  let final = ''

  result.map((exp,index) => {
    
    if(index === 0 && exp === '-') {
      final += 'negative'
      return
    }

    for(const [key, value] of Object.entries(expressions)) {
      if(exp === value) {
        //console.log(value)
        final += key
      }
    }
  })

  console.log(final)
  console.log('\n')
}

StringExpression('onezeropluseight')
StringExpression('oneminusoneone')
StringExpression('foursixminustwotwoplusonezero')
StringExpression('twoplustwoplusthree')
StringExpression('twoplustwoplusthreeminusseven')
StringExpression('eightplustwominusfive')
StringExpression('oneminusoneminusone')

/* 1. For input "onezeropluseight" the output was incorrect. The correct output is oneeight

2. For input "oneminusoneone" the output was incorrect. The correct output is negativeonezero

3. For input "foursixminustwotwoplusonezero" the output was incorrect. The correct output is threefour

4. For input "twoplustwoplusthree" the output was incorrect. The correct output is seven

5. For input "twoplustwoplusthreeminusseven" the output was incorrect. The correct output is zero

6. For input "eightplustwominusfive" the output was incorrect. The correct output is five

7. For input "oneminusoneminusone" the output was incorrect. The correct output is negativeone */