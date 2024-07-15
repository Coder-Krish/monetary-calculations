import { Invoice } from "../models/Invoice";
import { InvoiceItem } from "../models/InvoiceItem";
import { Money } from "../models/Money";
import { Percentage } from "../models/Percentage";
import { Quantity } from "../models/Quantity";

test('Invoice calculations should be correct', () => {
// Create some invoice items
const item1 = new InvoiceItem(1, 1, "Item 1", new Money(300.00), new Quantity(1), new Percentage(39.1304));
const item2 = new InvoiceItem(2, 1, "Item 2", new Money(595.00), new Quantity(1), new Percentage(39.1304));
const item3 = new InvoiceItem(2, 1, "Item 3", new Money(600.00), new Quantity(1),new Percentage(39.1304));
const item4 = new InvoiceItem(2, 1, "Item 4", new Money(600.00), new Quantity(1),new Percentage(39.1304));
const item5 = new InvoiceItem(2, 1, "Item 5", new Money(105.00), new Quantity(1),new Percentage(39.1304));
const item6 = new InvoiceItem(2, 1, "Item 6", new Money(2800.00), new Quantity(1), new Percentage(39.1304));
const item7 = new InvoiceItem(2, 1, "Item 7", new Money(750.00), new Quantity(1), new Percentage(39.1304));

// Add items to the invoice
const items = [item1, item2, item3, item4, item5, item6, item7];

    const invoice = new Invoice(1, "INV-001", items, new Percentage(39.1304));
    
    expect(invoice.subTotal.value).toBe(5750.0000);
    expect(invoice.discountAmount.value).toBe(2249.998);
    expect(invoice.totalAmount.value).toBe(3500.002);
});
