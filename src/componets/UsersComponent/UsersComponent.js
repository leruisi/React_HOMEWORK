import React, { useEffect, useState } from 'react';

const UsersComponent = ({ onUserClick }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => onUserClick(user.id)}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default UsersComponent;
