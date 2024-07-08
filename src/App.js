import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsDisplayScreen from './components/PostsDisplayScreen';
import CreatePostScreen from './components/CreatePostScreen';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    console.log("Adding post:", post);
    setPosts(prevPosts => [...prevPosts, post]);
  };

  const editPost = (id, updatedPost) => {
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsDisplayScreen posts={posts} editPost={editPost} />} />
        <Route path="/create" element={<CreatePostScreen addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
