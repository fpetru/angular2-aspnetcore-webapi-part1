using System.Collections.Generic;
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

        //// GET: api/values
        //[HttpGet]
        //public IEnumerable<NoteItem> Get()
        //{
        //    return new NoteItem[] { new NoteItem() { Id = "1", Body = "Hello", UpdatedOn = "2016-11-16 10:50:23", CreatedOn = "2016-11-16 10:50:23", UserId = 1} };
        //}

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            NoteItem[] arrayOfNotes = new NoteItem[] { new NoteItem() { Id = "1", Body = "Hello note ! This is a first sample more should come should come should come should come should come should come should come should come", UpdatedOn = "2016-11-16 10:50:23", CreatedOn = "2016-11-16 10:50:23", UserId = 1 },
                                                       new NoteItem() { Id = "2", Body = "Hello 2 should come should come should come should come should come should come should come should come should come should come should come should come should come", UpdatedOn = "2016-11-16 10:50:23", CreatedOn = "2016-11-16 10:50:23", UserId = 2 },
                                                       new NoteItem() { Id = "3", Body = "Hello 3 should come should come should come should come should come should come should come should come should come should come should come should come should come should come", UpdatedOn = "2016-11-17 10:50:23", CreatedOn = "2016-11-17 10:50:23", UserId = 3 }};
            return JsonConvert.SerializeObject(arrayOfNotes);
        }
    }
}
