import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; // checa si lo que esta en el input si no tiene nada que se salga de la funcion

        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        

    }


    return (

        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>


    );
}
