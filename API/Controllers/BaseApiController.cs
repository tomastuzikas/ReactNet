using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [ApiController] // called -> atribute
    [Route("api/[controller]")] // [controller] -> className - "Controller" 
    public class BaseApiController : ControllerBase // ControllerBase don't return views
    {
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices
            .GetService<IMediator>();
    }
}