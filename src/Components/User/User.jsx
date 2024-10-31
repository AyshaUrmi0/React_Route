import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';


const User = ({user}) => {
    const{ name,email,phone}=user;
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${user.id}`}>
                <button>View Details</button></Link>
        </div>
    );
};

export default User;