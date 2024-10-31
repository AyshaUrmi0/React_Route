import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User'; 

export default function Users() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Our awesome users!</p>
     <div>
     {
      users.map(user=><User key={user.id} user={user}></User>)
     }
     </div>
    </div>
  );
}
