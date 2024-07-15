import { Money } from './Money';
import { Percentage } from './Percentage';
import { InvoiceItem } from './InvoiceItem';

export class Invoice {
    public invoiceId: number;
    public invoiceNo: string;
    public items: InvoiceItem[];
    public subTotal: Money;
    public discountPercentage: Percentage;
    public discountAmount: Money;
    public totalAmount: Money;

    constructor(invoiceId: number, invoiceNo: string, items: InvoiceItem[], discountPercentage: Percentage) {
        this.invoiceId = invoiceId;
        this.invoiceNo = invoiceNo;
        this.items = items;
        this.discountPercentage = discountPercentage;
        this.subTotal = this.calculateSubTotal();
        this.discountAmount = this.calculateDiscountAmount();
        this.totalAmount = this.calculateTotalAmount();
    }

    private calculateSubTotal(): Money {
        return this.items.reduce((total, item) => Money.add(total, Money.multiply(item.price, item.quantity.value)), new Money(0));
    }

    private calculateDiscountAmount(): Money {
        return this.subTotal.applyDiscount(this.discountPercentage);
    }

    private calculateTotalAmount(): Money {
        return this.subTotal.applyDiscountAmount(this.discountAmount);
    }
}
