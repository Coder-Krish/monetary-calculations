namespace BillingSystem.Sales.Domain.ValueObjects;

public class Quantity
{
    public decimal Value { get; }

    public Quantity(decimal value)
    {
        if (value < 0)
            throw new ArgumentException("Quantity cannot be negative.");
        Value = value;
    }

    public static Quantity operator +(Quantity q1, Quantity q2)
    {
        return new Quantity(q1.Value + q2.Value);
    }

    public static Quantity operator -(Quantity q1, Quantity q2)
    {
        return new Quantity(q1.Value - q2.Value);
    }

    public override string ToString() => Value.ToString();
}

