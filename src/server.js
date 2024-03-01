const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/products', (req, res, next) => {
    res.send(bancoDeDados.getProducts())
})

app.get('/products/:id',(req, res, next) => {
    res.send(bancoDeDados.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = bancoDeDados.salveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req, res, next) => {
    const product = bancoDeDados.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`)
})