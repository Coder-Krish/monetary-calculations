export class Quantity {
    public value: number;

    constructor(value: number) {
        if (value < 0) throw new Error("Quantity cannot be negative.");
        this.value = value;
    }

    public static add(q1: Quantity, q2: Quantity): Quantity {
        return new Quantity(q1.value + q2.value);
    }

    public static subtract(q1: Quantity, q2: Quantity): Quantity {
        return new Quantity(q1.value - q2.value);
    }
}
