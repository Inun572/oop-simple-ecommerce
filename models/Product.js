import { faker } from '@faker-js/faker';

import { moneyFormatter } from '../libs/formatter.js';

export default class Product {
  constructor(name, price, description) {
    this.id = 'P' + faker.string.nanoid(8);
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = [];
    this.isActive = true;
  }

  displayInfo() {
    if (this.isActive) {
      console.log(`Product Id: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Price: ${moneyFormatter(this.price)}`);
      console.log(`Description: ${this.description}`);
      console.log(`Status: Active\n`);
    } else {
      console.log(`Product not found\n`);
    }
  }

  static createProduct(name, price, description) {
    console.log(`Product created successfully\n`);
    return new Product(name, price, description);
  }

  updatedProduct(
    newName = this.name,
    newPrice = this.price,
    newDescription = this.description
  ) {
    this.name = newName;
    this.price = newPrice;
    this.description = newDescription;
    console.log(`Product updated successfully\n`);
    return this;
  }

  deleteProduct() {
    if (this.isActive) {
      this.isActive = false;
      console.log(`Product deleted successfully\n`);
    } else {
      console.log(`Product not found\n`);
    }
  }
}
