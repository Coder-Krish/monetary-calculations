import { InvoiceItem } from "../models/InvoiceItem";
import { Money } from "../models/Money";
import { Percentage } from "../models/Percentage";
import { Quantity } from "../models/Quantity";

test('InvoiceItem calculations should be correct', () => {
    const item = new InvoiceItem(1, 1, "Item 1", new Money(100), new Quantity(2), new Percentage(10));
    expect(item.subTotal.value).toBe(200);
    expect(item.discountAmount.value).toBe(20);
    expect(item.totalAmount.value).toBe(180);
});
