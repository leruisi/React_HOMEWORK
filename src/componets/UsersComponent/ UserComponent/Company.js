import React from 'react';

const Company = ({ company }) => {
    const { name, catchPhrase, bs } = company;

    return (
        <div>
            <h2>Company</h2>
            <p>Name: {name}</p>
            <p>Catch Phrase: {catchPhrase}</p>
            <p>BS: {bs}</p>
        </div>
    );
}

export  {Company} ;
