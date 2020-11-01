using Microsoft.AspNetCore.Mvc;
using api.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly TodoContext _context;
        public TodosController(TodoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<api.Models.Todo> GetList()
        {
            return _context.TodoItems.ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetItem(long id)
        {
            var todo = await _context.TodoItems.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            return todo;
        }

        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(Todo todo)
        {
            _context.TodoItems.Add(todo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetItem), new { id = todo.Id }, todo);
        }
    }
}