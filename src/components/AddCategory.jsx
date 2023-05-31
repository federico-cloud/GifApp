import React, { useEffect, useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (hasInteracted) {
          setShowError(false);
          if (inputValue.length === 0 && showError) {
            setShowError(true);
          }
        }
      }, [inputValue, hasInteracted]);
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setShowError(true);
        }
    };
        
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (inputValue.length + 1 !== 0) {
            setShowError(false);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length === 0){
            setShowError(true);
        } else {
            setShowError(false);
            onNewCategory(inputValue);
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
                onKeyDown={handleKeyDown}
            />
            <div className='error-msg'>
                { showError ? <span>The text musn't be empty</span> : false }
            </div>
        </form>  
    )
}