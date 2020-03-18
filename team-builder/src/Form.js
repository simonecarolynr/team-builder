import React from 'react';
import { render } from 'react-dom';
import { useState, setState } from 'react';

function Form() {

    const { user, setUser } = useState({
        fName: "",
        lName: "",
        email: "",
    });
    
    function onChange (event) {
        setUser({...user, [event.target.name]: event.target.value})
    };

    render(
        <form>

            <label>First Name: 
                <input name='fName' type='text' value={user.fName} onChange={onChange}/>
            </label>

            <label>Last Name: 
                <input name='lName' type='text' value={user.lName} onChange={onChange}/>
            </label>

            <label>Email: 
                <input name='email' type='email' value={user.email} onChange={onChange}/>
            </label>

            <label>Position: 
                <option value='1'>Backend</option>
                <option value='2'>Front End</option>
                <option value='3'>Designer</option>
            </label>

            <button type="submit" />

        </form>
    )
}

export default Form;