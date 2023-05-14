using System.Threading.Tasks;
using VFXStudio.API.Models;

namespace VFXStudio.API.Data
{
    public interface IJobRepository
    {
         Task<Job> PostJob(Job myjob);
         Task<Job> DeleteJob(int Id);
    }
}