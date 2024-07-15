using BillingSystem.Sales.Domain.ValueObjects;

namespace BillingSystem.Sales.Domain.Entities;

public class InvoiceItemModel
{
    public Guid InvoiceItemId { get; }
    public Guid InvoiceId { get; }
    public string ItemName { get; }
    public Money Price { get; }
    public Quantity Quantity { get; }
    public Money SubTotal { get; }
    public Percentage DiscountPercentage { get; }
    public Money DiscountAmount => CalculateDiscountAmount();
    public Money TotalAmount => CalculateTotalAfterDiscount();

    public InvoiceItemModel(string itemName, Money price, Quantity quantity, Percentage discountPercentage)
    {
        InvoiceItemId = Guid.NewGuid();
        InvoiceId = Guid.NewGuid();
        ItemName = itemName;
        Price = price;
        Quantity = quantity;
        SubTotal = CalculateSubTotal();
        DiscountPercentage = discountPercentage;
    }

    private Money CalculateSubTotal()
    {
        return (Price * Quantity.Value);
    }
    private Money CalculateDiscountAmount()
    {
        return CalculateSubTotal().ApplyDiscountPercentage(DiscountPercentage);
    }

    private Money CalculateTotalAfterDiscount()
    {
        var subtotal = CalculateSubTotal();
        return subtotal.ApplyDiscountAmount(DiscountAmount);
    }

    public override string ToString() =>
        $"{ItemName} (Qty: {Quantity}, Price: {Price},SubTotal: {SubTotal}, Discount: {DiscountPercentage}% ({DiscountAmount}), Total: {TotalAmount})";
}