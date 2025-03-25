import React from 'react';
import { Clock, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;