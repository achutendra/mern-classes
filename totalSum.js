const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

function totalSum(counter){
  let sum = 0;
  for(let i =0; i<= counter; i++){
    sum += i;
  }
  return sum;
}

function firstRequest(req, res) {
  let counter = req.body.counter;
  console.log(req.body);
  let calSum = totalSum(counter);
  let answer = {
    sum: calSum 
  }
  
  res.send(answer);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/handleSum',  firstRequest);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })