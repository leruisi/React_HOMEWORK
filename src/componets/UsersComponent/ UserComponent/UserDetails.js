import React from 'react';

const UserDetails = ({ user }) => {
    const { id, name, username, email, phone, website } = user;

    return (
        <div>
            <h2>User Details</h2>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
}

export default UserDetails;
