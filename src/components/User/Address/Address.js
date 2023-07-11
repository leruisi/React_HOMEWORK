import React from 'react';

const Address = ({ address }) => {
    return (
        <div>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
        </div>
    );
}

export  {Address};

