using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WidgetsExpressAPI.Models
{
    public class Driver
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
