export class Percentage {
    public value: number;

    constructor(value: number) {
        if (value < 0 || value > 100) throw new Error("Percentage must be between 0 and 100.");
        this.value = value;
    }

    public static add(p1: Percentage, p2: Percentage): Percentage {
        return new Percentage(p1.value + p2.value);
    }

    public static subtract(p1: Percentage, p2: Percentage): Percentage {
        return new Percentage(p1.value - p2.value);
    }
}
