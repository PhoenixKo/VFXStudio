using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VFXStudio.API.Models;

namespace VFXStudio.API.Data
{
    public class JobRepository : IJobRepository
    {
        private readonly DataContext _context;
        public JobRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<Job> DeleteJob(int Id)
        {
            Job myjob = await _context.Jobs.FirstOrDefaultAsync(x => x.Id == Id);
            
             _context.Jobs.Remove(myjob);
             
            await _context.SaveChangesAsync();

            return myjob;
        }

        public async Task<Job> PostJob(Job myjob)
        {
            await _context.Jobs.AddAsync(myjob);
            await _context.SaveChangesAsync();

            return myjob;
        }
        
    }
}