namespace BillingSystem.Sales.Domain.ValueObjects;

public class Money
{
    public decimal Value { get; }

    public Money(decimal value)
    {
        if (value < 0)
            throw new ArgumentException("Money value cannot be negative.");
        Value = Math.Round(value, 4, MidpointRounding.ToEven);
    }

    public static Money operator +(Money m1, Money m2)
    {
        return new Money(m1.Value + m2.Value);
    }

    public static Money operator -(Money m1, Money m2)
    {
        return new Money(m1.Value - m2.Value);
    }

    public static Money operator *(Money m, decimal factor)
    {
        return new Money(m.Value * factor);
    }

    public static Money operator /(Money m, decimal divisor)
    {
        return new Money(m.Value / divisor);
    }

    public Money ApplyDiscountPercentage(Percentage discountPercentage)
    {
        decimal discountAmount = Value * (discountPercentage.Value / 100);
        return new Money(discountAmount);
    }
    public Money ApplyDiscountAmount(Money discountAmount)
    {
        return new Money(Value - discountAmount.Value);
    }

    public override string ToString() => Value.ToString("0.0000");
}
