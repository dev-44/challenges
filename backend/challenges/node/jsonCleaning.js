/* To perform a GET request on the route https://coderbyte.com/api/challenges/json/json-cleaning and then clean the object 
according to the following rules: Remove all keys that have values of N/A, -, or empty strings. If one of these values 
appear in an array, remove that single item from the array. Then console log the modified object as a string. */

const https = require('https')

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {


let data = ''
//parse json data here
resp.on('data', (d) => {
   data = d.toString()
})

resp.on('end', () => {
   let obj = JSON.parse(data)
   console.log(obj)
   
   //Check if value is a String
   Object.values(obj).map(v => {
      //console.log(typeof v)
      if(v === '' || v === '-' || v === 'N/A') {
         let property = Object.keys(obj).find(key => obj[key] === v)
         //console.log(property)
         delete obj[property.toString()]
      } else {
         
         //Check if value is an object
         if(typeof v === 'object') {
            //Check if value is an Array
            if(Array.isArray(v)) {
               let property = Object.keys(obj).find(key => obj[key] === v)
               let arr = v.filter(function(item){
                  return item !== '' && item !== '-' && item !== 'N/A'
               })
                
               console.log(arr)
               obj[property.toString()] = arr
            } else {
               Object.values(v).map(sv => {
                  if(sv === '' || sv === '-' || sv === 'N/A') {
                     let property = Object.keys(v).find(key => v[key] === sv)
                     //console.log(property)
                     delete v[property.toString()]
                  }
               })
            }
         } 
         
      }


   })

   console.log(obj)
})

resp.on('error', (error) => {
   console.log(error)
})
})