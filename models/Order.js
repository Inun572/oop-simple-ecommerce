import { faker } from '@faker-js/faker';
import Table from 'cli-table3';
import { moneyFormatter } from '../libs/formatter.js';

export default class Order {
  constructor(cart) {
    this.id = 'O' + faker.string.nanoid(8);
    this.items = [];
    this.totalItems = 0;
    this.totalAmount = 0;
  }

  createOrder(cart) {
    cart.items.forEach((item) => {
      this.items.push(item);
    });
    this.totalItems = cart.totalItems;
    this.totalAmount = cart.totalPrice;
  }

  displayOrderDetails() {
    const table = new Table({
      head: [
        { hAlign: 'center', content: 'Name' },
        { hAlign: 'center', content: 'Price' },
        { hAlign: 'center', content: 'Qty' },
        { hAlign: 'center', content: 'Total' },
      ],
      colWidths: [20, 20, 5, 20],
    });

    this.items.forEach((item) => {
      table.push([
        { hAlign: 'center', content: item.name },
        { hAlign: 'center', content: moneyFormatter(item.price) },
        { hAlign: 'center', content: item.qty },
        { hAlign: 'right', content: moneyFormatter(item.total) },
      ]);
    });

    table.push([
      { colSpan: 3, content: 'Total', hAlign: 'right' },
      {
        content: moneyFormatter(this.totalAmount),
        hAlign: 'right',
      },
    ]);

    console.log(`Order ID: ${this.id}`);
    console.log(`Total Items: ${this.totalItems}`);
    console.log(`Details order:\n-----------------`);
    console.log(table.toString());
  }
}
