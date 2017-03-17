using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WidgetsExpressAPI.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public int CustomerID { get; set; }
        [Required]
        public Customer Customer { get; set; }

        [Required]
        public DateTime DeliveryDate { get; set; }
        public DateTime PickupDate { get; set; }

        public int DeliveryDriverId { get; set; }
        public Driver DeliveryDriver { get; set; }
        public int PickupDriverId { get; set; }
        public Driver PickupDriver { get; set; }

    }
}