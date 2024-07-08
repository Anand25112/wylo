import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const PostsDisplayScreen = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
  
  ]);

  const editPost = (id, updatedPost) => {
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? posts.map(post => (
        <Post key={post.id} post={post} editPost={editPost} />
      )) : <p>No posts available.</p>}
      <Link to="/create">
        <button>Create New Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplayScreen;
