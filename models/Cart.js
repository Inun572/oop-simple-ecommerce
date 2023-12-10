import { faker } from '@faker-js/faker';
import Table from 'cli-table3';

import { moneyFormatter } from '../libs/formatter.js';

export class Cart {
  constructor() {
    this.id = 'K' + faker.string.nanoid(8);
    this.items = [];
    this.totalItems = this.items.length;
    this.totalPrice = 0;
  }

  addItem(item) {
    if (item.isActive) {
      const { name, price } = item;
      let qty = 1;

      const isContained = this.items.some((item) => item.name === name);
      if (isContained) {
        const index = this.items.findIndex((item) => item.name === name);
        this.items[index].qty += 1;
        this.items[index].total = price * this.items[index].qty;
      } else {
        this.items.push({
          name,
          price: price,
          qty: qty,
          total: price * qty,
        });
      }
      this.totalPrice = this.items.reduce(
        (total, item) => total + item.total,
        0
      );

      console.log(`Item added to cart successfully\n`);
    } else {
      console.log(`Item not found. Fail to add to cart\n`);
    }
  }

  removeItem(name) {
    const index = this.items.findIndex((item) => item === name);
    this.items.splice(index, 1);
    console.log(`Item removed from cart successfully\n`);
  }

  viewCart() {
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

    table.push(
      [
        { colSpan: 3, content: 'Total', hAlign: 'right' },
        {
          content: moneyFormatter(this.totalPrice),
          hAlign: 'right',
        },
      ],
      [
        {
          colSpan: 3,
          content: 'Total Items',
          hAlign: 'right',
        },
        {
          content: this.items.length,
          hAlign: 'right',
        },
      ]
    );

    console.log(`List of items in cart:\n----------------------`);
    console.log(table.toString());
  }
}
