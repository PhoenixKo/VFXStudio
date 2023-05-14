using System.Threading.Tasks;
using VFXStudio.API.Models;

namespace VFXStudio.API.Data
{
    public class CommentRepository : ICommentRepository
    {
          private readonly DataContext _context;
        public CommentRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Comment> makeComment(Comment mycomment)
        {
            await _context.Comments.AddAsync(mycomment);
           await _context.SaveChangesAsync();

           return mycomment;
        }
    }
}