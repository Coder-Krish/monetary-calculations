using BillingSystem.Sales.Domain.Entities;
using BillingSystem.Sales.Domain.ValueObjects;

class Program
{
    static void Main(string[] args)
    {
        // Create some invoice items
        var item1 = new InvoiceItemModel("Item 1", new Money(100), new Quantity(2), new Percentage(10));
        var item2 = new InvoiceItemModel("Item 2", new Money(200), new Quantity(1.5m), new Percentage(5));

        // Add items to the invoice
        var items = new List<InvoiceItemModel> { item1, item2 };

        // Create the invoice
        var invoice = new InvoiceModel("INV-001", items, new Percentage(5));

        // Print the invoice details
        Console.WriteLine(invoice);

        Console.ReadLine();
    }
}