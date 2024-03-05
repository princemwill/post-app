import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the backend to create a new post
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
    .then(response => response.json())
    .then(data => {
      // Clear the form fields
      setTitle('');
      setContent('');

      // Optionally, do something with the new post data
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;