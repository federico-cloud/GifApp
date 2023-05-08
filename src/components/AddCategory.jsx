import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

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
            setCategories(categories => [inputValue, ...categories])
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