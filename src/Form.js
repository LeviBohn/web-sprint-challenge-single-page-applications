import React, { useState } from 'react';

export default function Form() {
    const [form, setForm] = useState({

    })

    return (
        <div>
        <h1>Form</h1>
            <form id='pizza-form'>
                
                <label id='name-input'>FirstName
                    <input id='name-input' type='text' />
                </label>  
                
                <label>Pizza Size
                    <select id='size-dropdown'>
                        <option>--Select One--</option>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                        <option>mega</option>
                    </select>
                </label>  
                
                <label>Pepperoni
                    <input type='checkbox'/>
                </label>
                <label>Olives
                    <input type='checkbox'/>
                </label>
                <label>Sausage
                    <input type='checkbox'/>
                </label>
                <label>Jalepenos
                    <input type='checkbox'/>
                </label>

                <label id='special-text'>special instructions
                    <input id='name-input' type='text' />
                </label>  

            </form>            
        </div>
    )
}