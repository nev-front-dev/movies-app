import React from 'react';
import Link from 'next/link';

const navigation = [
    {id: 1, title: 'home', path: '/'},
    {id: 2, title: 'contacts', path: '/contacts'},
    {id: 3, title: 'posts', path: '/posts'}
]

export default function Header() {
  return <div className="flex justify-between px-4 bg-red-500 w-full">
      <div className="">
          nev
      </div>
      <div className="flex space-x-2">
          {navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>
                {title}
            </Link>
          ))}
    </div>
  </div>;
}
