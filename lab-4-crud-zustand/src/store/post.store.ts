import { create } from 'zustand';
import type { Article } from '../types/article';

interface PostState {
  posts: Article[];
  addPost: (post: Article) => void;
  updatePost: (post: Article) => void;
  deletePost: (id: string) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  updatePost: (post) => set((state) => ({
    posts: state.posts.map((p) => (p.id === post.id ? post : p))
  })),
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter((p) => p.id !== id)
  })),
}));
