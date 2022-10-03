const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
let bodyParser = require("body-parser");

let products = [{
    id: 5,
    supplierId: 2,
    categoryId: 2,
    quantityPerUnit: "36 boxes",
    unitPrice: 21.35,
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: true,
    name: "Chef Anton's Gumbo Mix",
  },
  {
    id: 6,
    supplierId: 3,
    categoryId: 2,
    quantityPerUnit: "12 - 8 oz jars",
    unitPrice: 25,
    unitsInStock: 120,
    unitsOnOrder: 0,
    reorderLevel: 25,
    discontinued: false,
    name: "Grandma's Boysenberry Spread",
  },
  {
    id: 7,
    supplierId: 3,
    categoryId: 7,
    quantityPerUnit: "12 - 1 lb pkgs.",
    unitPrice: 30,
    unitsInStock: 15,
    unitsOnOrder: 0,
    reorderLevel: 10,
    discontinued: false,
    name: "Uncle Bob's Organic Dried Pears",
  },
  {
    id: 8,
    supplierId: 3,
    categoryId: 2,
    quantityPerUnit: "12 - 12 oz jars",
    unitPrice: 40,
    unitsInStock: 6,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false,
    name: "Northwoods Cranberry Sauce",
  },
  {
    id: 9,
    supplierId: 4,
    categoryId: 6,
    quantityPerUnit: "18 - 500 g pkgs.",
    unitPrice: 97,
    unitsInStock: 29,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: true,
    name: "Mishi Kobe Niku",
  },
  {
    id: 10,
    supplierId: 4,
    categoryId: 8,
    quantityPerUnit: "12 - 200 ml jars",
    unitPrice: 31,
    unitsInStock: 31,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false,
    name: "Ikura",
  },
  {
    id: 2,
    supplierId: 1,
    categoryId: 1,
    quantityPerUnit: "24 - 12 oz bottles",
    unitPrice: 19,
    unitsInStock: 17,
    unitsOnOrder: 40,
    reorderLevel: 25,
    discontinued: false,
    name: "Chang",
  },
  {
    id: 3,
    supplierId: 1,
    categoryId: 2,
    quantityPerUnit: "12 - 550 ml bottles",
    unitPrice: 10,
    unitsInStock: 13,
    unitsOnOrder: 70,
    reorderLevel: 25,
    discontinued: false,
    name: "Anisedgit",
  },
]

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  let selectedProduct = products.find(product => product.id == id)
  if (selectedProduct) {
    res.send(selectedProduct)
  } else {
    res.status(404).json({
      message: 'Product Not Found!'
    })
  }
})

app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  products = products.filter(product => product.id != id)
  res.send(`id: ${id} asda deleted`)
})

app.post('/products', (req, res) => {
  const product = {
    id: products.length + 1,
    supplierId: req.body.supplierId,
    unitPrice: req.body.unitPrice,
  };
  products.push(product)
  res.send(product)
})


app.listen(port, function () {
  console.log(`listening on ${port}`);
});