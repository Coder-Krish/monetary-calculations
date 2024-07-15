# BillingSystem

This is a sample project demonstrating a monetary calculations implemented using .NET. The project follows clean architecture principles and includes value objects for handling financial calculations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple monetary calculation system that allows users to create invoices, add items to them, and calculate the total amount, considering discounts and quantities. The application is built using .NET.

## Features

- Create and manage invoices.
- Add and manage invoice items.
- Calculate subtotals, discounts, and total amounts with high precision.
- Encapsulate financial logic within value objects.
- Unit tests for value objects and domain models.

## Technologies

- .NET
- xUnit (for testing)

## Project Structure

- `BillingSystem.Sales` - The main console application.
- `BillingSystem.Tests` - Unit tests for the application.

## Setup

### Prerequisites

- .NET SDK


### Clone the Repository

```bash
git clone https://github.com/yourusername/BillingSystemSample.git
cd MonetaryCalculations
```
### Build the Project
```bash
dotnet build
```

### Run the Application
```bash
dotnet run --project BillingSystem
```

## Usage

The console application will create an invoice, add items, and display the calculated values. Modify the Main method in Program.cs to customize the sample data.

## Running Tests

To run the unit tests, use the following command:
```bash
dotnet test
```



