import React from 'react';
import { useState, setState} from 'react';
import { render } from 'react-dom';



export default function Members() {

    const [members, setMembers] = useState([{
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        id: ''
    
     }]);

    members.map(member => {
        return (
            <div>
                <h1>{member.firstName} {member.lastName}</h1>
                <h3>{member.email}</h3>
                <h3>{member.position}</h3>
            </div>
        )
     })
    
    return(
   <div>
       
   </div>
   
    )
}