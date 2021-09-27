const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const { v4: uuidv4 } = require('uuid')
const productData = require('./data.json')

app.use(bodyParser.json());

app.get('/products', (req, res) => {
    res.json(productData);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })