
import { Invoice } from "./app/models/Invoice";
import { InvoiceItem } from "./app/models/InvoiceItem";
import { Money } from "./app/models/Money";
import { Percentage } from "./app/models/Percentage";
import { Quantity } from "./app/models/Quantity";

// // Create some invoice items
// const item1 = new InvoiceItem(1, 1, "Item 1", new Money(300.00), new Quantity(1), new Percentage(39.1304));
// const item2 = new InvoiceItem(2, 1, "Item 2", new Money(595.00), new Quantity(1), new Percentage(39.1304));
// const item3 = new InvoiceItem(2, 1, "Item 3", new Money(600.00), new Quantity(1),new Percentage(39.1304));
// const item4 = new InvoiceItem(2, 1, "Item 4", new Money(600.00), new Quantity(1),new Percentage(39.1304));
// const item5 = new InvoiceItem(2, 1, "Item 5", new Money(105.00), new Quantity(1),new Percentage(39.1304));
// const item6 = new InvoiceItem(2, 1, "Item 6", new Money(2800.00), new Quantity(1), new Percentage(39.1304));
// const item7 = new InvoiceItem(2, 1, "Item 7", new Money(750.00), new Quantity(1), new Percentage(39.1304));

// // Add items to the invoice
// const items = [item1, item2, item3, item4, item5, item6, item7];

// // Create the invoice
// const invoice = new Invoice(1, "INV-001", items, new Percentage(39.1304));

// // Print the invoice details
// console.log(`Invoice No: ${invoice.invoiceNo}`);
// console.log(`SubTotal: ${invoice.subTotal.value}`);
// console.log(`Discount: ${invoice.discountPercentage.value}% (${invoice.discountAmount.value})`);
// console.log(`Total: ${invoice.totalAmount.value}`);
// invoice.items.forEach(item => {
//     console.log(`${item.itemName} (Qty: ${item.quantity.value}, Price: ${item.price.value}, SubTotal: ${item.subTotal.value}, Discount: ${item.discountPercentage.value}%, DiscountAmount: ${item.discountAmount}, Total: ${item.totalAmount.value})`);
// });



document.addEventListener('DOMContentLoaded', () => {
    const invoice = new Invoice(1, "INV-001", new Array<InvoiceItem>(), new Money(0));

    const addItemForm = document.getElementById('add-item-form') as HTMLFormElement;
    const invoiceItemsTable = document.getElementById('invoice-items') as HTMLTableElement;
    const subtotalElement = document.getElementById('subtotal') as HTMLSpanElement;
    const totalAmountElement = document.getElementById('total-amount') as HTMLSpanElement;
    const invoiceDiscountPercentInput = document.getElementById('invoice-discount-percent') as HTMLInputElement;
    const invoiceDiscountAmountInput = document.getElementById('invoice-discount-amount') as HTMLInputElement;

    addItemForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const itemNameInput = document.getElementById('item-name') as HTMLInputElement;
        const itemPriceInput = document.getElementById('item-price') as HTMLInputElement;
        const itemQuantityInput = document.getElementById('item-quantity') as HTMLInputElement;
        const itemDiscountPercentInput = document.getElementById('item-discount-percent') as HTMLInputElement;

        const itemName = itemNameInput.value.trim();
        const price = parseFloat(itemPriceInput.value);
        const quantity = parseFloat(itemQuantityInput.value);
        const discountPercent = parseFloat(itemDiscountPercentInput.value);

        if (!itemName || isNaN(price) || isNaN(quantity)) {
            alert('Please fill all fields correctly.');
            return;
        }

        const itemId = invoice.items.length + 1;
        const item = new InvoiceItem(itemId, 1, itemName, new Money(price), new Quantity(quantity), new Percentage(discountPercent));
        invoice.items.push(item);

        // Clear form inputs
        itemNameInput.value = '';
        itemPriceInput.value = '';
        itemQuantityInput.value = '';
        itemDiscountPercentInput.value = '';

        renderInvoiceItems();
        updateInvoiceSummary();
    });

    invoiceDiscountPercentInput.addEventListener('input', (event) => {
        const value = parseFloat((event.target as HTMLInputElement).value);
        if (!isNaN(value)) {
            invoice.discountPercentage = new Percentage(value);
            renderInvoiceItems();
            updateInvoiceSummary();
        }
    });

    invoiceDiscountAmountInput.addEventListener('input', (event) => {
        const value = parseFloat((event.target as HTMLInputElement).value);
        if (!isNaN(value)) {
            invoice.discountAmount = new Money(value);
            renderInvoiceItems();
            updateInvoiceSummary();
        }
    });

    function renderInvoiceItems() {
        const tbody = invoiceItemsTable.querySelector('tbody')!;
        tbody.innerHTML = '';

        invoice.items.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.itemName}</td>
                <td>${item.price.value}</td>
                <td>${item.quantity.value}</td>
                <td>${item.discountPercentage.value}</td>
                <td>${item.discountAmount.value}</td>
                <td>${item.totalAmount.value}</td>
            `;
            tbody.appendChild(row);
        });
    }

    function updateInvoiceSummary() {
        invoice.subTotal;
        invoice.totalAmount;
        subtotalElement.textContent = invoice.subTotal.value.toString();
        totalAmountElement.textContent = invoice.totalAmount.value.toString();
        invoiceDiscountPercentInput.value = invoice.discountPercentage.toString();
        invoiceDiscountAmountInput.value = invoice.discountAmount.toString();
    }
});
