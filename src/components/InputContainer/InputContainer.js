import React, { Fragment } from 'react';
import './InputContainer.css';
import { Link } from 'react-router-dom';
import Input from '@enact/moonstone/Input';

// const InputItem = ({placeholder, onChange, value}) => {
//     return (
//         <Input 
//                 placeholder={placeholder}
//                 onChange={onChange} 
//                 size="small" 
//                 type="text"
//                 value={value} 
//         />
//     )
// }

const InputContainer = ({label,placeholder,onChange, value}) => {

    return (
        <div className="input-box" >
            <label>
                <span><strong>{label}</strong></span>
                <Input 
                        placeholder={placeholder}
                        onChange={onChange} 
                        size="small" 
                        type="text"
                />
            </label>
        </div>
    )
}

export default InputContainer;