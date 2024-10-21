import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]); // State to hold blog posts
  const [currentPost, setCurrentPost] = useState({ id: null, title: '', content: '' }); // State for the current post being edited

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost.id) {
      // Update existing post
      setPosts(posts.map(post => (post.id === currentPost.id ? currentPost : post)));
    } else {
      // Create new post
      const newPost = { ...currentPost, id: Date.now() }; // Use timestamp as unique ID
      setPosts([...posts, newPost]);
    }
    setCurrentPost({ id: null, title: '', content: '' }); // Reset form
  };

  const handleEdit = (post) => {
    setCurrentPost(post); // Set post to be edited
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id)); // Delete post by ID
  };

  return (
    <div>
      <h2>My Favorite Historical Sites!</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={currentPost.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="content"
          placeholder="Post Content"
          value={currentPost.content}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{currentPost.id ? 'Update Post' : 'Create Post'}</button>
      </form>

      <ul>
  {posts.map(post => (
    <li key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content}</p> 
      <button onClick={() => handleEdit(post)}>Edit</button>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Home;