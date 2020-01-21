import React from 'react';
import { render } from 'react-dom';

function Form() {
    render(
        <form>

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

        </form>
    )
}

export default Form;