using System;
using WidgetsExpressAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WidgetsExpressAPI.Controllers
{
    public class CustomersController : ApiController
    {
        Customer[] Customers = new Customer[]
        {
            new Customer { Id = 1, Name = "Tomato Soup Company", DeliveryAddress = "5555 SW 55th Avenue Suite 1, Faketown, Fakestate, 55555"},
            new Customer { Id = 2, Name = "Yo-yo Company", DeliveryAddress = "5555 SW 55th Avenue Suite 2, Faketown, Fakestate, 55555" },
            new Customer { Id = 3, Name = "Hammer Company", DeliveryAddress = "5555 SW 55th Avenue Suite 3, Faketown, Fakestate, 55555" },
        };

        public IEnumerable<Customer> GetAllCustomers()
        {
            return Customers;
        }

        public IHttpActionResult GetCustomer(int id)
        {
            var Customer = Customers.FirstOrDefault((p) => p.Id == id);
            if (Customer == null)
            {
                return NotFound();
            }
            return Ok(Customer);
        }
    }
}