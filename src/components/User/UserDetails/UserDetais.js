import React from 'react';

 const UserDetails = ({ user }) => {
    return (
        <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.contactphone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
}

export {UserDetails}
