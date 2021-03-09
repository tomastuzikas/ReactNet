using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController] // called -> atribute
    [Route("api/[controller]")] // [controller] -> className - "Controller" 
    public class BaseApiController : ControllerBase // ControllerBase don't return views
    {
        
    }
}