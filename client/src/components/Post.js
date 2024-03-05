import React from 'react';

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
      {/* other post features */}
    </div>
  );
}

export default Post;
