import { Quantity } from "../models/Quantity";

test('Quantity creation should succeed', () => {
    const quantity = new Quantity(5);
    expect(quantity.value).toBe(5);
});

test('Quantity with negative value should throw an error', () => {
    expect(() => new Quantity(-1)).toThrow('Quantity cannot be negative.');
});

test('Quantity addition should succeed', () => {
    const q1 = new Quantity(2);
    const q2 = new Quantity(3);
    const result = Quantity.add(q1, q2);
    expect(result.value).toBe(5);
});

test('Quantity subtraction should succeed', () => {
    const q1 = new Quantity(5);
    const q2 = new Quantity(3);
    const result = Quantity.subtract(q1, q2);
    expect(result.value).toBe(2);
});
