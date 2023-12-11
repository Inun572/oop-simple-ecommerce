import { faker } from '@faker-js/faker';

export default class Order {
  constructor(cart) {
    this.id = 'O' + faker.string.nanoid(8);
    this.items = [];
    this.totalItems = 0;
    this.totalAmount = 0;
  }

  createOrder(cart) {
    this.items.push(cart.items);
    this.totalItems = cart.totalItems;
    this.totalAmount = cart.totalPrice;
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.id}`);
    console.log(`Total Items: ${this.totalItems}`);
    console.log(`Items: ${this.items}`);
    console.log(`Total Amount: ${this.totalAmount}`);
  }
}
