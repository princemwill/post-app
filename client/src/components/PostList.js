import React, { useEffect, useState } from 'react';
import Post from './Post';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
