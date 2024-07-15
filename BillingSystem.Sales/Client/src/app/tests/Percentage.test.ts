import { Percentage } from "../models/Percentage";

test('Percentage creation should succeed', () => {
    const percentage = new Percentage(15.5);
    expect(percentage.value).toBe(15.5);
});

test('Percentage with invalid value should throw an error', () => {
    expect(() => new Percentage(-1)).toThrow('Percentage must be between 0 and 100.');
    expect(() => new Percentage(101)).toThrow('Percentage must be between 0 and 100.');
});
