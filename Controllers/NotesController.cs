using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace NotebookAppWeb.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private class NoteItem
        {
            public string Id;
            public string Body;
            public string UpdatedOn;
            public string CreatedOn;
            public int UserId;
        }

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            NoteItem[] arrayOfNotes = new NoteItem[] { new NoteItem() { Id = "1", Body = "Learning Angular 2   Service, Components, Module", UpdatedOn = "2016-11-16 10:50:23", CreatedOn = "2016-11-16 10:50:23", UserId = 1 },
                                                       new NoteItem() { Id = "2", Body = "ASP.NET Core & IIS   Run Angular 2 over a .NET solution", UpdatedOn = "2016-11-16 10:50:23", CreatedOn = "2016-11-16 10:50:23", UserId = 2 },
                                                       new NoteItem() { Id = "3", Body = "Use Gulp JS          As workflow and deployment", UpdatedOn = "2016-11-17 10:50:23", CreatedOn = "2016-11-17 10:50:23", UserId = 3 }};
            return JsonConvert.SerializeObject(arrayOfNotes);
        }
    }
}
