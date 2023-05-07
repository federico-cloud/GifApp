import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search gifs of ..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>  
    )
}