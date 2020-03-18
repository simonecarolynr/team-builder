import React from 'react';
import { render } from 'react-dom';
import Members from './Members';

function Form() {

    const onSubmit = (event) => {
        event.preventDefault();
        setMembers({
            firstName: event.target.fName,
            lastName: event.target.lName,
            email: event.target.email,
            position: event.target.position,
            id: event.target.id,
        })
    }
    return(

        
        <form className='form'>

            <label>First Name: 
                <input name='fName' type='text' />
            </label>

            <label>Last Name: 
                <input name='lName' type='text' />
            </label>

            <label>Email: 
                <input name='email' type='text' />
            </label>

            <label>Position: 
                <option value='1'>Backend</option>
                <option value='2'>Front End</option>
                <option value='3'>Designer</option>
            </label>

            <button type='submit' onsubmit={onSubmit}>Submit</button>

        </form>

    )
       
    
}

export default Form;