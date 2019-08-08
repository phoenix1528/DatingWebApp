using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetApp.API.DataTransferObjects
{
    public class PhotoForReturnDto
    {
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
    }
}
