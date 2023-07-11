import React, { useState } from 'react';
import UsersComponent from './componets/UsersComponent/UsersComponent';
import PostComponent from './componets/PostComponent/PostComponent';

const App = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleUserClick = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <div>
            <h1>Users</h1>
            <UsersComponent onUserClick={handleUserClick} />
            {selectedUserId && (
                <PostComponent userId={selectedUserId} />
            )}
        </div>
    );
}

export  {App};
