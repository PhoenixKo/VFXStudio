using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using VFXStudio.API.Data;
using VFXStudio.API.Dtos;
using VFXStudio.API.Models;
using Microsoft.EntityFrameworkCore;

namespace VFXStudio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly ICommentRepository _repo;
        private readonly IConfiguration _config;
        private readonly DataContext _context;
        public CommentsController(ICommentRepository repo, IConfiguration config, DataContext context)
        {
            _context = context;
            _config = config;
            _repo = repo;

        }

        [HttpPost("comment")]
        public async Task<IActionResult> CreateComment(CommentToCreateDto commentToCreate)
        {

            var commentCreate = new Comment
            {
                Username = commentToCreate.Username,
                UserComment = commentToCreate.UserComment
            };

            var createdProduct = await _repo.makeComment(commentCreate);

            return StatusCode(201);
        }

        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            var comments = await _context.Comments.ToListAsync();

            return Ok(comments);
        }

    }
}