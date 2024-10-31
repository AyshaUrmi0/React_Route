import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user=useLoaderData();
    const {name,email,phone}=user;
    return (
        <div>
            <h3>This from UserDetails</h3>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetails;