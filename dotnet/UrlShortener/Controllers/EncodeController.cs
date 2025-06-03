using Microsoft.AspNetCore.Mvc;
using UrlShortener.Models;

namespace UrlShortener.Controllers;

[ApiController]
[Route("[controller]")]
public class EncodeController : ControllerBase
{
    private readonly ILogger<EncodeController> _logger;

    public EncodeController(ILogger<EncodeController> logger)
    {
        _logger = logger;
    }

    [HttpPost]
    public IEnumerable<EncodeResponse> Post(EncodeRequest encodeRequest) => throw new NotImplementedException();
}