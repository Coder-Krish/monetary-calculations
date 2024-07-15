using BillingSystem.Sales.Domain.Entities;
using BillingSystem.Sales.Domain.ValueObjects;

namespace BillingSystem.Tests.Tests;

public class InvoiceItemTests
{
    [Fact]
    public void InvoiceItem_Calculations_Should_BeCorrect()
    {
        var item = new InvoiceItemModel("Item 1", new Money(2.4600m), new Quantity(7), new Percentage(0));

        Assert.Equal(17.22m, item.SubTotal.Value);
        Assert.Equal(0, item.DiscountAmount.Value);
        Assert.Equal(17.22m, item.TotalAmount.Value);
    }
}
