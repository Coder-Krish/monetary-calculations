namespace BillingSystem.Sales.Domain.ValueObjects;

public class Percentage
{
    public decimal Value { get; }

    public Percentage(decimal value)
    {
        if (value < 0 || value > 100)
            throw new ArgumentException("Percentage must be between 0 and 100.");
        Value = value;
    }

    public static Percentage operator +(Percentage p1, Percentage p2)
    {
        return new Percentage(p1.Value + p2.Value);
    }

    public static Percentage operator -(Percentage p1, Percentage p2)
    {
        return new Percentage(p1.Value - p2.Value);
    }

    public override string ToString() => Value.ToString("0.0000");
}
