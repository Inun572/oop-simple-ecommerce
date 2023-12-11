import Product from './models/Product.js';
import Category from './models/Category.js';

import Cart from './models/Cart.js';
import Order from './models/Order.js';

// Example usage

// Instantiate products with arguments format (name, price, description)
const product1 = Product.createProduct('Close Up', 5000, 'toothpaste');
const product2 = Product.createProduct('Doritos', 12000, 'snack');

// display info of product
product1.displayInfo();
product2.displayInfo();

// update product must have arguments format (new name, new price, new description)
product1.updatedProduct('Colgate', 5000, 'toothpaste');

// delete product set isActive property value to false
product2.deleteProduct();
product2.displayInfo();

// Instantiate categories with argumentss format (name)
const category1 = Category.createCategory('homecare');
const category2 = Category.createCategory('food');

// display info of category
category1.displayInfo();
category2.displayInfo();

// update category must have arguments format (new name)
category2.updateCategory('beverages');

// delete category set isActive property value to false
category1.deleteCategory();

category1.displayInfo();

// we create some products
const product3 = Product.createProduct('Frestea', 5000, 'drinks');
const product4 = Product.createProduct('Taro', 8000, 'snack');

// add product to category must have arguments format (productName)
category1.addProduct(product1);
category2.addProduct(product2);
category2.addProduct(product3);
category2.addProduct(product4);

// get all products from category
category1.getAllProducts();
category2.getAllProducts();

// instantiate cart
const cart1 = new Cart();

// add item to cart with arguments format (productName, quantity)

cart1.addItem(product1, 2);
cart1.addItem(product2, 1);
cart1.addItem(product3);
cart1.addItem(product4, 2);

// display cart
cart1.viewCart();

// remove item from cart with arguments format (productName)
cart1.removeItem('Frestea');
cart1.viewCart();

// Instantiate new order
const order1 = new Order();

// add item in cart to order with arguments format (cart name)
order1.createOrder(cart1);

// display order details
order1.displayOrderDetails();
