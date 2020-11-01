using System;

namespace api.Models
{
    public class Todo
    {
        public long Id { get; set; }
        public DateTime ScheduledDate { get; set; }
        public string Details { get; set; }
    }
}
