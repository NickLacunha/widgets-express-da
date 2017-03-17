using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WidgetsExpressAPI.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string DeliveryAddress { get; set; }
    }
}