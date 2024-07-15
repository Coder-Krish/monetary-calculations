using BillingSystem.Sales.Domain.ValueObjects;

namespace BillingSystem.Sales.Domain.Entities;

public class InvoiceModel
{
    public Guid InvoiceId { get; }
    public string InvoiceNo { get; }
    public List<InvoiceItemModel> Items { get; }
    public Money SubTotal => CalculateSubTotal();
    public Percentage DiscountPercentage { get; }
    public Money DiscountAmount => CalculateDiscountAmount();
    public Money TotalAmount => CalculateTotalAmount();

    public InvoiceModel(string invoiceNo, List<InvoiceItemModel> items, Percentage discountPercentage)
    {
        InvoiceId = Guid.NewGuid();
        InvoiceNo = invoiceNo;
        Items = items;
        DiscountPercentage = discountPercentage;
    }

    private Money CalculateSubTotal()
    {
        Money subtotal = new Money(0);
        foreach (var item in Items)
        {
            subtotal += item.Price * item.Quantity.Value;
        }
        return subtotal;
    }

    private Money CalculateDiscountAmount()
    {
        return SubTotal.ApplyDiscountPercentage(DiscountPercentage);
    }

    private Money CalculateTotalAmount()
    {
        return SubTotal.ApplyDiscountAmount(DiscountAmount);
    }

    public override string ToString()
    {
        string items = string.Join("\n", Items);
        return $"Invoice No: {InvoiceNo}\nSubTotal: {SubTotal}\nDiscount: {DiscountPercentage}% ({DiscountAmount}) \nTotal: {TotalAmount}\nItems:\n{items}";
    }
}
