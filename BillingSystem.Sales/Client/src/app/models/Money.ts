import { Percentage } from "./Percentage";

export class Money {
    public value: number;

    constructor(value: number) {
        if (value < 0) throw new Error("Money value cannot be negative.");
        this.value = parseFloat(value.toFixed(4));
    }

    public static add(m1: Money, m2: Money): Money {
        return new Money(m1.value + m2.value);
    }

    public static subtract(m1: Money, m2: Money): Money {
        return new Money(m1.value - m2.value);
    }

    public static multiply(m: Money, factor: number): Money {
        return new Money(m.value * factor);
    }

    public static divide(m: Money, divisor: number): Money {
        return new Money(m.value / divisor);
    }

    public applyDiscount(discountPercentage: Percentage): Money {
        const discountAmount = this.value * (discountPercentage.value / 100);
        return new Money(discountAmount);
    }

    public applyDiscountAmount(discountAmount: Money){
        return new Money(this.value - discountAmount.value);
    }
}
