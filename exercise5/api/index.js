const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
const { v4: uuidv4 } = require('uuid')
const cors = require('cors');
const productData = require('./data.json');

app.use(bodyParser.json());
app.use(cors());

let users = []

let invoices = []

// PRODUCTS
app.get('/products', (req, res) => {
  res.json(productData)
})

app.get('/products/:id', (req, res) => {
    const result = productData.find(d => d.id === req.params.id)
    if (result !== -1)
        res.json(result)
    else
        res.send('Product not found!')
  })

app.post('/products', (req,res) => {
    console.log('Creating product');
    productData.items.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.json(productData)
})

app.delete('/products/:id', (req,res) => {
    const result = productData.findIndex(d => d.id === req.params.id)
    if (result !== -1) {
        productData.splice(result, 1);
        res.send('Product deleted!')
    } else
        res.send('Product not found!')
})

// ONGELMA!!!!!!
app.put('/products/:id', (req,res) => {
    const result = productData.findIndex(d => d.id === req.params.id)
    if (result !== -1) {
        products[result].name = req.body.name;
        products[result].manufacturer = req.body.manufacturer;
        products[result].category = req.body.category;
        products[result].description = req.body.description;
        products[result].price = req.body.price;
    } else
        res.send('Product not found')
})
// LOPPU

// Search for products based on name, manufacturer, category
app.get('/products/:string', (req,res) => {
    res.json();
});

// USER
app.post('/users', (req,res) => {
    console.log('Creating user');
    users.push({
        id: uuidv4(),
        name: req.body.name,
        address: req.body.address,
        number: req.body.number,
        job: req.body.job,
        age: req.body.age
    })
    res.send('User added!')
})

app.get('/users', (req,res) => {
    res.send(users)
})

// PURCHASE AND INVOICE

app.post('/invoices/:userId', (req,res) => {
    console.log('Creating invoice');
    totalSum = 0;
    allProducts = [];
    for (let i = 0; req.body.id.length; i++) {
        total = total + productData[productData.findIndex(d => d.id == req.params.userId)]
    }
    for (let i = 0; req.body.id.length; i++) {
        allProducts[i] = productData[productData.findIndex(d => d.id == req.params.userId)]
    }
    invoices.push({
        id: uuidv4(),
        userId: req.params.userId,
        product: allProducts,
        totalSum: totalSum
    })
    res.send('Invoice created')
})

app.get('/invoices/user/:id', (req,res) => {
    let result = invoices.filter(d => d.id == req.params.id)
    res.send(result)
})

app.get('/invoices/:userId/:id', (req,res) => {
    let result = invoices.find(s => s.id == req.params.userId && s.userId == req.params.id)
    res.send(result)
})

app.delete('/invoices/:userId/:id', (req,res) => {
    let result = invoices.find(s => s.id == req.params.userId && s.userId == req.params.id)
    invoices.splice(result, 1)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
