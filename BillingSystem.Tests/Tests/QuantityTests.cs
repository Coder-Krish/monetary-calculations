using BillingSystem.Sales.Domain.ValueObjects;
using Xunit;

namespace BillingSystem.Tests.Tests;

public class QuantityTests
{
    [Fact]
    public void Quantity_Creation_Should_Succeed()
    {
        var quantity = new Quantity(5);
        Assert.Equal(5, quantity.Value);
    }

    [Fact]
    public void Quantity_NegativeValue_ShouldThrowArgumentException()
    {
        Assert.Throws<ArgumentException>(() => new Quantity(-1));
    }

    [Fact]
    public void Quantity_Addition_Should_Succeed()
    {
        var q1 = new Quantity(2);
        var q2 = new Quantity(3);
        var result = q1 + q2;
        Assert.Equal(5, result.Value);
    }

    [Fact]
    public void Quantity_Subtraction_Should_Succeed()
    {
        var q1 = new Quantity(5);
        var q2 = new Quantity(3);
        var result = q1 - q2;
        Assert.Equal(2, result.Value);
    }
}
