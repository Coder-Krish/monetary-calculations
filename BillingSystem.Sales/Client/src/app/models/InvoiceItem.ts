import { Money } from './Money';
import { Percentage } from './Percentage';
import { Quantity } from './Quantity';

export class InvoiceItem {
    public invoiceItemId: number;
    public invoiceId: number;
    public itemName: string;
    public price: Money;
    public quantity: Quantity;
    public subTotal: Money;
    public discountPercentage: Percentage;
    public discountAmount: Money;
    public totalAmount: Money;

    constructor(
        invoiceItemId: number,
        invoiceId: number,
        itemName: string,
        price: Money,
        quantity: Quantity,
        discountPercentage: Percentage
    ) {
        this.invoiceItemId = invoiceItemId;
        this.invoiceId = invoiceId;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
        this.subTotal = this.calculateSubTotal();
        this.discountPercentage = discountPercentage;
        this.discountAmount = this.calculateDiscountAmount();
        this.totalAmount = this.calculateTotalAfterDiscount();
    }

    private calculateSubTotal(): Money {
        return Money.multiply(this.price, this.quantity.value);
    }
    private calculateDiscountAmount(): Money {
        return Money.multiply(this.price, this.quantity.value).applyDiscount(this.discountPercentage);
    }

    private calculateTotalAfterDiscount(): Money {
        return this.calculateSubTotal().applyDiscountAmount(this.discountAmount);
    }
}
