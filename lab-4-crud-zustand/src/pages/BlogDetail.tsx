import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { usePostStore } from '../store/post.store';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = usePostStore((state) => state.posts.find((p) => p.id === id));
  const deletePost = usePostStore((state) => state.deletePost);
  const navigate = useNavigate();

  if (!post) return <p>Post not found</p>;

  const handleDelete = () => {
    deletePost(id!);
    toast.success('Post deleted');
    navigate('/blog');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(`/blog/edit/${id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
