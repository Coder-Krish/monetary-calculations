using BillingSystem.Sales.Domain.ValueObjects;

namespace BillingSystem.Tests.Tests;

public class MoneyTests
{
    [Fact]
    public void Money_Creation_Should_Succeed()
    {
        var money = new Money(100.4569m);
        Assert.Equal(100.4569m, money.Value);
    }

    [Fact]
    public void Money_NegativeValue_ShouldThrowArgumentException()
    {
        Assert.Throws<ArgumentException>(() => new Money(-1));
    }

    [Fact]
    public void Money_Addition_Should_Succeed()
    {
        var m1 = new Money(100);
        var m2 = new Money(50);
        var result = m1 + m2;
        Assert.Equal(150, result.Value);
    }

    [Fact]
    public void Money_Subtraction_Should_Succeed()
    {
        var m1 = new Money(100);
        var m2 = new Money(50);
        var result = m1 - m2;
        Assert.Equal(50, result.Value);
    }

    [Fact]
    public void Money_Multiplication_Should_Succeed()
    {
        var m1 = new Money(100);
        var result = m1 * 1.5m;
        Assert.Equal(150, result.Value);
    }

    [Fact]
    public void Money_ApplyDiscount_Should_Succeed()
    {
        var m1 = new Money(100);
        var discount = new Percentage(10);
        var result = m1.ApplyDiscountPercentage(discount);
        Assert.Equal(10, result.Value);
    }
}
