import { faker } from '@faker-js/faker';

export default class Category {
  constructor(name) {
    this.id = 'C' + faker.string.nanoid(8);
    this.name = name;
    this.products = [];
    this.isActive = true;
  }

  displayInfo() {
    if (this.isActive) {
      console.log(`Category Id: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Status: Active\n`);
    } else {
      console.log(`Category not found\n`);
    }
  }

  static createCategory(name) {
    console.log(`Category created successfully\n`);
    return new Category(name);
  }

  updateCategory(newName) {
    this.name = newName;
    console.log(`Category updated successfully\n`);
    return this;
  }

  deleteCategory() {
    if (this.isActive) {
      this.isActive = false;
      console.log(`Category deleted successfully\n`);
    } else {
      console.log(`Category not found\n`);
    }
  }

  addProduct(product) {
    if (!product.isActive) {
      console.log(`Product not found. Fail to add to category\n`);
    } else {
      this.products.push(product);
      product.category.push(this.name);
      console.log(`Product added to category successfully\n`);
    }
  }

  getAllProducts() {
    console.log(
      `All products in ${this.name}:\n----------------------------------`
    );
    this.products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name}`);
    });
  }
}
