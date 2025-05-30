import { Link } from 'react-router-dom';
import { usePostStore } from '../store/post.store';

const BlogList = () => {
  const posts = usePostStore((state) => state.posts);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Listing</h1>
      <Link to="/blog/new">
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">Create</button>
      </Link>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;