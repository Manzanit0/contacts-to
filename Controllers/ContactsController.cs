using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using contacts_to.Models;

namespace contacts_to.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {

        // GET api/contacts
        [HttpGet]
        public ActionResult<IEnumerable<Contact>> Get() => Storage.ContactsCache;

        [HttpGet]
        [Route("[action]/{id:int}")]
        public ActionResult<Contact> GetById(int id) => Storage.ContactsCache.Where(x => x.id == id).FirstOrDefault();

        [HttpGet]
        [Route("[action]/{email}")]
        public ActionResult<Contact> GetByEmail(string email) => Storage.ContactsCache.Where(x => x.email == email).FirstOrDefault();

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody] Contact value)
        {
            Storage.ContactsCache.Add(value);
        }

        // PUT api/contacts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Contact value)
        {
            var index = Storage.ContactsCache.FindIndex(x=>x.id == id);
            Storage.ContactsCache.Insert(index,value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
          var itemToRemove = Storage.ContactsCache.SingleOrDefault(r => r.id == id);
          Storage.ContactsCache.Remove(itemToRemove);
        }
    }
}
