const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/getUserInfo', (req, res) => {
    console.log('req : ',req.body)
    res.send('Hello World')
  })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})