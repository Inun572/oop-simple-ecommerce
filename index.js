import Product from './models/Product.js';
import Category from './models/Category.js';

import { faker } from '@faker-js/faker';

// Example usage

// Instantiate products with parameters format (name, price, description)
const product1 = Product.createProduct('closeup', 5000, 'toothpaste');
const product2 = Product.createProduct('doritos', 12000, 'snack');

// display info of product
product1.displayInfo();
product2.displayInfo();

// update product must have parameter format (new name, new price, new description)
product1.updatedProduct('closeup', 5000, 'toothpaste');

// delete product set isActive property value to false
product2.deleteProduct();

// Instantiate categories with parameters format (name)
const category1 = Category.createCategory('homecare');
const category2 = Category.createCategory('food');

// display info of category
category1.displayInfo();
category2.displayInfo();

// update category must have parameter format (new name)
category2.updateCategory('beverages');

// delete category set isActive property value to false
category1.deleteCategory();

// add product to category must have parameter format (product)
const product3 = Product.createProduct('Frestea', 5000, 'drinks');
const product4 = Product.createProduct('Taro', 8000, 'snack');

category2.addProduct(product2);
category2.addProduct(product3);
category2.addProduct(product4);

// get all products from category
category2.getAllProducts();
