export default function Contact({user}) {
  console.log(userç);
    return <div>
        <h1>Contact: {user.id}</h1>
      </div>;
  }
  
  export async function getServerSideProps(context) {
    const {id} = context.params;
    console.log(context.params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const user = await res.json()
  
    return {
      props: {
        user,
      },
    }
  }