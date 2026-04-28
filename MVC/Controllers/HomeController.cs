using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Models;
using ProductApp.Services;

namespace ProductApp.Controllers;

public class HomeController : Controller
{
    private readonly ProductService _productService;
    private readonly ContentSafetyService _contentSafetyService;

    public HomeController(ProductService productService, ContentSafetyService contentSafetyService)
    {
        _productService = productService;
        _contentSafetyService = contentSafetyService;
    }

    public IActionResult Index()
    {
        var products = _productService.GetAll();
        return View(products);
    }

    [HttpPost]
    public async Task<IActionResult> AddProduct(Product product)
    {
        if (ModelState.IsValid)
        {
            var safetyCheck = await _contentSafetyService.ValidateProductAsync(product);
            
            if (!safetyCheck.IsSafe)
            {
                TempData["ErrorMessage"] = safetyCheck.Message;
                return RedirectToAction(nameof(Index));
            }

            _productService.Add(product);
            TempData["SuccessMessage"] = "Produto validado e cadastrado com sucesso!";
        }
        return RedirectToAction(nameof(Index));
    }

    [HttpPost]
    public IActionResult DeleteProduct(Guid id)
    {
        _productService.Remove(id);
        return RedirectToAction(nameof(Index));
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
