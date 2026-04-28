using System;
using System.Collections.Generic;
using System.Linq;
using ProductApp.Models;

namespace ProductApp.Services;

public class ProductService
{
    private readonly List<Product> _products = new();

    public IEnumerable<Product> GetAll() => _products;

    public void Add(Product product)
    {
        product.Id = Guid.NewGuid();
        _products.Add(product);
    }

    public void Remove(Guid id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product != null)
        {
            _products.Remove(product);
        }
    }
}
