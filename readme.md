# OOP Simple E Commerce

A simple E Commerce with simple class implementation.

## How to use

> **Create Product**

Instead using keyword `new` to instantiate object from `Product` class, we could use a static method `createProduct`.

```js
const product1 = Product.createProduct('product nama', product price, 'description')
```

> **Display Info Product**

We could use `displayInfo()` method to show product information just we create before.

```js
product1.displayInfo();
```

Example output:

```
Product Id: PPSJNdV4u
Name: Close Up
Price: Rp 5.000,00
Description: toothpaste
Category:
Status: Active
```

### Folder Constructor

```
├── libs
│   ├── formatter.js
├── models
│   ├── Cart.js
│   ├── Catergory.js
│   ├── Order.js
│   ├── Product.js
├── node_modules
├── index.js
├── package.json
├── yarn.lock
└── .gitignore
```
