import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostStore } from '../store/post.store';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = usePostStore((state) => state.posts.find((p) => p.id === id));
  const updatePost = usePostStore((state) => state.updatePost);
  const navigate = useNavigate();
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  useEffect(() => {
    if (!post) navigate('/blog');
  }, [post]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updatePost({ id: id!, title, content, published: true });
    navigate(`/blog/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-2 py-1"
        />
      </div>
      <div>
        <label className="block mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-2 py-1 h-32"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update Post
      </button>
    </form>
  );
};

export default EditPost;