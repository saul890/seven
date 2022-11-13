
// Import the express library and assign it to a variable
import express from 'express'
import fetch from 'node-fetch'


// Create an instance of an express application 
const app = express()

// Add this line below the line that says: const app = express()
app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

/*
// Set up a response for the root path of the application
app.get('/name/:name', (req, res) => {
  console.log(req.params)
  res.json({ data: "Draw your children!" })
})
*/

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', async (req, res) => {
  console.log(req.query);

  //Get todays date and print it to the console 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  console.log(today)

  // Make a request to another wbesite and wait for a response
  // Also use todays date to fetch the data
  const response = await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=" + today + "&end_date=" + today + "&api_key=ORXmF61vg9eiVAGVpYubzn2r8OmHMW2v7UJLftCr")

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body.element_count)

  // Get the advice text string from the response body object
  const advice = body.element_count

  res.json({ near_earth: advice })
})

/*


//Allowing Ze to see my computer
// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
  console.log(req.query)
  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})



app.get('/advice', async (req, res) => {
  console.log(req.query)
  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})

/*
//Making computer talk
app.get('/test', async (req, res) => {
  // Make a request to another wbesite and wait for a response
  const response = await fetch('http://149.31.230.36:3001/test')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  res.json({ data: body })
})

app.get('/hi', (req, res) => {
  // Make a request to another wbesite and wait for a response


  res.json({ data: "hi" })
})



async function joke(){
  const data = await fetch('')
}

*/


