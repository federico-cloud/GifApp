import React, { useState } from 'react'

export const AddCategory = ({setCategories: setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);

        
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length === 0){
            setShowError(true);
        } else {
            setShowError(false);
            setCategorias(categories => [inputValue, ...categories]);
            setInputValue('');
        };
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search gifs of ..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <div className='error-msg'>
                {
                    showError 
                    ? <span>The text musn't be empty</span>
                    : false
                }
            </div>
        </form>  
    )
}