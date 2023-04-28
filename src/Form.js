import axios from 'axios';
import React, { useState } from 'react';

export default function Form() {
    
    const onSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        axios
            .post("https://reqres.in/api/orders", '')
            // .then(res => {
            //     setPost(res.data);
            // })
    };
    const [inputValue, setInputValue] = useState("");
    const changeHandler = event => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    return (
        <div>
        <h1>Form</h1>
            <form onSubmit={ onSubmit } id='pizza-form'>
                
                <label>FirstName
                    <input onChange={changeHandler}
                        id='name-input'
                        type='text'
                    />
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

                <label>special instructions
                    <input id='special-text' type='text' />
                </label>
                <button submit = {onSubmit} id='order-button' type="submit">Submit</button>

                <p>name must be at least 2 characters</p>
                
            </form>            
        </div>
    )
}

// Form.addEventListener('submit', (e) => {
//     let messages =[]
//     if (['name-input'].value.length < 2) {
//         messages.push('name must be at least 2 characters')
//         return messages;
//     }
// })

