import { Money } from "../models/Money";
import { Percentage } from "../models/Percentage";

test('Money creation should succeed', () => {
    const money = new Money(100.456);
    expect(money.value).toBe(100.456);
});

test('Money with negative value should throw an error', () => {
    expect(() => new Money(-1)).toThrow('Money value cannot be negative.');
});

test('Money addition should succeed', () => {
    const m1 = new Money(100);
    const m2 = new Money(50);
    const result = Money.add(m1, m2);
    expect(result.value).toBe(150);
});

test('Money subtraction should succeed', () => {
    const m1 = new Money(100);
    const m2 = new Money(50);
    const result = Money.subtract(m1, m2);
    expect(result.value).toBe(50);
});

test('Money multiplication should succeed', () => {
    const m1 = new Money(100);
    const result = Money.multiply(m1, 1.5);
    expect(result.value).toBe(150);
});

test('Money apply discount should succeed', () => {
    const m1 = new Money(100);
    const discount = new Percentage(10);
    const result = m1.applyDiscount(discount);
    expect(result.value).toBe(10);
});

test('Money apply discount amount should succeed', () => {
    const m1 = new Money(500);
    const discount = new Percentage(10);
    const discountAmount = m1.applyDiscount(discount);
    const result = m1.applyDiscountAmount(discountAmount);
    expect(result.value).toBe(450);
});
