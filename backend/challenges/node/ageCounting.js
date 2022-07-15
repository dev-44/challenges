const https = require('https');
const fs = require('fs');
const crypto = require('crypto')

/*
In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting 
which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. 
Your goal is to count how many items exist that have an age equal to 32. Then you should create a write stream to a file 
called output.txt and the contents should be the key values (from the json) each on a separate line in the order they 
appeared in the json file (the file should end with a newline character on its own line). 
Finally, then output the SHA1 hash of the file.

Example Input
{"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

File Contents (output.txt)
IAfpK
9snd2

Example Output
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
*/


https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  

  let {statusCode} = resp
  let contentType = resp.headers['content-type']
  resp.setEncoding('utf-8')

  // parse json data here...
   let data = ''
   resp.on('data', (d) => {
      data += [d]
   })

   resp.on("end", ()=> {
      let dataIWant = data.split(':')
      
      dataIWant = dataIWant[1]
         .replace(/^"/g, '[')
         .replace(/"}/g,']')
         .replace(/(key)=([\d\w]{5}), (age)=(\d{1,2})/g, '{"$1": "$2", "$3": $4}')
         .toString()
      //console.log(dataIWant)

      let arrObj = JSON.parse(dataIWant)
      //console.log(arrObj)

      let keys = []

      arrObj.map(item => {
         if(item.age === 32) {
            keys.push(item.key)
         }
      })

      //console.log(keys)
      keys.map(key => {
         fs.writeFile('output.txt', key + '\n', {flag: 'a'}, err => {
            if(err) {
               console.error(err)
               return
            }   
         })

      })

      fs.readFile('output.txt', 'utf8', (err, data) => {
         if(err) {
            console.error(err)
            return
         }
         
         const hash = crypto.createHash('sha1').update(data).digest('hex')
         console.log(hash)
      })

   })

});