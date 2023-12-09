import Product from './models/Product.js';

// Example usage

// Instantiate products with parameters format (name, price, description)
const product1 = Product.createProduct('closeup', 5000, 'toothpaste');
const product2 = Product.createProduct('doritos', 12000, 'snack');

// display info of product
product1.displayInfo();
product2.displayInfo();

// update product must have parameter format (new name, new price, new description)
product1.updatedProduct('closeup', 5000, 'toothpaste');

// delete product set isActive prperty value to false
product2.deleteProduct();
