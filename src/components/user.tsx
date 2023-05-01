import React from 'react';
interface Person {
    email: string;
    name:string;
    password:string;
    surname:string;
}
const User = ({email,name,surname,password}:Person) => {
    return(
        <div>
            <p>{email}</p>
            <p>{name}</p>
            <p>{surname}</p>
        </div>
    )
}
export default User