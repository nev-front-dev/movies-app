import React from 'react';
import { useRouter } from 'next/router';

export default function Error() {

    const router = useRouter()

    React.useEffect(()=>{
        setTimeout(()=>{router.push('/')}, 3000)
    },[router])
  
  return <div>
      <h1>Somthing is going wrong...</h1>
  </div>;
}
