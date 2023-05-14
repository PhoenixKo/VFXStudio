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
    public class JobsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IJobRepository _repo;
        private readonly IConfiguration _config;
        public JobsController(IJobRepository repo, IConfiguration config, DataContext context)
        {
            _config = config;
            _repo = repo;
            _context = context;

        }

        [HttpPost("postjob")]
        public async Task<IActionResult> PostJob(JobForPostDto jobForPostDto)
        {
            var jobCreate = new Job 
            {
                JobTitle = jobForPostDto.JobTitle,
                JobSkill = jobForPostDto.JobSkill,
                JobResponsibility = jobForPostDto.JobResponsibility
            };

            var createJob = await _repo.PostJob(jobCreate);

            return StatusCode(201);
        }

          [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var jobs = await _context.Jobs.ToListAsync();

            return Ok(jobs);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            
           await _repo.DeleteJob(id);

           return StatusCode(201);

        }
    }
}