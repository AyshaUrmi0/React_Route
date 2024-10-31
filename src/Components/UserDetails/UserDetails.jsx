import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
    const user=useLoaderData();
    const {userId}=useParams();
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }

    const {name,email,phone}=user;
    console.log(userId);
    return (
        <div className='user-details'>
            <h3>This from UserDetails</h3>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;