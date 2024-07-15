using BillingSystem.Sales.Domain.ValueObjects;
using Xunit;

namespace BillingSystem.Tests.Tests;

public class PercentageTests
{
    [Fact]
    public void Percentage_Creation_Should_Succeed()
    {
        var percentage = new Percentage(15.5m);
        Assert.Equal(15.5m, percentage.Value);
    }

    [Fact]
    public void Percentage_InvalidValue_ShouldThrowArgumentException()
    {
        Assert.Throws<ArgumentException>(() => new Percentage(-1));
        Assert.Throws<ArgumentException>(() => new Percentage(101));
    }
}
