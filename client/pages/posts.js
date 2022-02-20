import React from 'react';
import Head from 'next/head'
import Link from 'next/link';

export default function Posts({posts}) {
console.log(posts);
  return (
    <>
  <Head>
    <title>Posts</title>
  </Head>
  <div>
    <h1>Posts: </h1>
   <ul>
     {
        posts.map(post => (
          <li key={post.id} className="hover:text-red-500">
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
          )
        )
      }
   </ul>
  </div>
  </>
  )
}

Posts.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:4200/posts')
  const posts = await res.json()
  return { posts }
}
