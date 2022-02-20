import React from 'react';
import Head from 'next/head'

export default function index({users}) {

  if(!users) {
    return {
      notFound: true
    }
  }
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div>
        <h1>Contacts: </h1>
          {users.map(user=><h3 key={user.id} className="text-red-500 uppercase cursor-pointer">
              {user.name}
              </h3>
            )
          }
        </div>
      </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}