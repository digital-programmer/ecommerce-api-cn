# ecommerce-api-cn
An API to store, update, delete inventory of an eCommerce Application

### Youtube Link
<a href="https://youtu.be/mPeLRR5W_EE">https://youtu.be/mPeLRR5W_EE</a>

### BASE_URL
<a href='https://ecommerce-api-cn.herokuapp.com/'>https://ecommerce-api-cn.herokuapp.com/</a>

### API to add products to the database
URL [POST]: /products/create
```
product: {
  name: laptop,
  quantity: 10
}

//response
data: {
    product: {
      name: laptop,
      quantity: 10
    }
}
```

### API to list products
URL [GET] : /products
```
data: {
  products: [
      {
        id: 1,
        name: laptop
        quantity: 10
      },
      {
        id: 2,
        name: camera
        quantity: 5
      },
      {
        id: 3,
        name: smartwatch
        quantity: 8
      },
  ]  
}
```

### API to delete products
URL [DELETE] : /products/:id
```
data: {
  message: “product deleted”
}
```

### API to update quantity of a product (can be incremented or decremented)
URL [POST] : /products/:id/update_quantity/?number=10
```
// response
data: {
  product: {
    id: 1,
    name: laptop,
    quantity: 20
  },
  message: updated successfully
}
```
