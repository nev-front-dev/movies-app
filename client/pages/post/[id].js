import React from 'react';

export default function Post({post}) {
  return <div>
    <h2>Post <strong>{post.title}</strong> :</h2>
    <div>
    <div>{post.body}</div>
    <div>{post.imageURI}</div>
    </div>
  </div>
}

Post.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
  const post = await res.json()
  return { post }
}