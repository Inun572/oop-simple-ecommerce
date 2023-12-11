# OOP Simple E Commerce

A simple E Commerce with simple class implementation.

## Folder Structure

```
├── libs
│ ├── formatter.js
├── models
│ ├── Cart.js
│ ├── Catergory.js
│ ├── Order.js
│ ├── Product.js
├── index.js
├── package.json
├── yarn.lock
└── .gitignore

```

## How to use

First, dont forget to `npm install` to install all the packages that already listed in package.json.

### Product Class

> **Create Product**

Instead using keyword `new` to instantiate object from `Product` class, we could use a static method `createProduct()` and pass arguments with format `name`, `price`, `description`

```js
const product1 = Product.createProduct('name', price, 'description');
```

> **Display Info Product**

We could use `displayInfo()` method to show product information just we create before.

```js
product1.displayInfo();
```

Example output:

```json
Product Id: PPSJNdV4u
Name: Close Up
Price: Rp 5.000,00
Description: toothpaste
Category:
Status: Active
```

> **Update Product**

We are able to update the product detail with `updateProduct()` method. Just pass arguments like we create a product.

```js
product1.updatedProduct('Colgate', 5000, 'toothpaste');
```

> **Delete Product**

We also can delete a product by change its isActive attribute to false by using `deleteProduct()`.

```js
product1.deleteProduct();
```

If we try to access a Product with `displayProdut()`, which has been deleted, detail of product can not be shown.

```js
product1.displayInfo();

The output:
Product not found.
```

### Category Class

> **Create Category**

Instantiate new category with static method `createCategory()`, put the name of category on its argument.

```js
const cat1 = Category.createCategory('homecare');
const cat2 = Category.createCategory('food');
```

> **Display Info Category**

We could use `displayInfo()` to see Category detail information.

```js
cat1.displayInfo();
```

Example output:

```js
Category Id: CVTAD9Qg7
Name: homecare
Status: Active
```

> **Update Category**

We could update the category with `updateCategory()` method.

```js
category2.updateCategory('beverages');
```

> **Delete Category**

We could delete category by set isActive property value to false with `deleteCategory` method.

```js
category1.deleteCategory();
```

If try to access deleted category with `displayInfo()`, will return not found.

```js
category1.displayInfo();

The output:
Category not found.
```

> **Add product to Category**

Category could having many item or product which coresponding to. We could add products to multiple category with `addProduct()` method by passing product `name` to its argument.

```js
// we create some products
const product3 = Product.createProduct('Frestea', 5000, 'drinks');
const product4 = Product.createProduct('Taro', 8000, 'snack');

category1.addProduct(product1);
category2.addProduct(product2);
category2.addProduct(product3);
category2.addProduct(product4);
```

The output:

```js
Product added to category successfully

// Adding deleted product will return this.
Product not found. Fail to add to category

Product added to category successfully

Product added to category successfully
```

> **Get All Products**

We could get all products in a category with `getAllProducts()`.

```js
category1.getAllProducts();
category2.getAllProducts();
```

The output:

```js
All products in homecare:
------------------------------
1. Colgate

All products in beverages:
------------------------------
1. Frestea
2. Taro
```

### Cart Class
