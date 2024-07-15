using BillingSystem.Sales.Domain.Entities;
using BillingSystem.Sales.Domain.ValueObjects;
using Xunit;

namespace BillingSystem.Tests.Tests;

public class InvoiceTests
{
    [Fact]
    public void Invoice_Calculations_Should_BeCorrect()
    {
        var item1 = new InvoiceItemModel("Item 1", new Money(300.00m), new Quantity(1), new Percentage(39.1304m));
        var item2 = new InvoiceItemModel("Item 2", new Money(595.00m), new Quantity(1), new Percentage(39.1304m));
        var item3 = new InvoiceItemModel("Item 3", new Money(600.00m), new Quantity(1), new Percentage(39.1304m));
        var item4 = new InvoiceItemModel("Item 4", new Money(600.00m), new Quantity(1), new Percentage(39.1304m));
        var item5 = new InvoiceItemModel("Item 5", new Money(105.00m), new Quantity(1), new Percentage(39.1304m));
        var item6 = new InvoiceItemModel("Item 6", new Money(2800.00m), new Quantity(1), new Percentage(39.1304m));
        var item7 = new InvoiceItemModel("Item 7", new Money(750.00m), new Quantity(1), new Percentage(39.1304m));

        var items = new List<InvoiceItemModel> { item1, item2, item3, item4, item5, item6, item7 };

        var invoice = new InvoiceModel("INV-001", items, new Percentage(39.1304m));

        Assert.Equal(5750.0000m, invoice.SubTotal.Value);
        Assert.Equal(2249.998m, invoice.DiscountAmount.Value);
        Assert.Equal(3500.002m, invoice.TotalAmount.Value);
    }
}
