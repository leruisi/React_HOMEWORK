import React from 'react';
import { UserDetails } from './UserDetails/UserDetais';
import { Address}  from './Address/Address';
import {Company} from './Company/Company';

const User = ({ user }) => {
    return (
        <div>
            <UserDetails user={user} />
            <Address adress={user.address} />
            <Company company={user.company} />
        </div>
    );
}

export  {User};
