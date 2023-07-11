import React from 'react';

 export const Company = ({ company }) => {
    return (
        <div>
            <p>Name: {company.name}</p>
            <p>Catch Phrase: {company.catchPhrase}</p>
            <p>BS: {company.bs}</p>
        </div>
    );
}

// export  {Company};
