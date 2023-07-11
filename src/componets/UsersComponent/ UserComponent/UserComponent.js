import React from 'react';

const UserComponent = ({ userDetails, onShowPostsClick }) => {
    const { id, name, username, email, phone, website } = userDetails;

    return (
        <div>
            <h2>User Details</h2>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <button onClick={onShowPostsClick}>Show Posts</button>
        </div>
    );
}

export  {UserComponent};
