using System.Threading.Tasks;
using VFXStudio.API.Models;

namespace VFXStudio.API.Data
{
    public interface ICommentRepository
    {
        Task<Comment> makeComment(Comment mycomment);
    }
}