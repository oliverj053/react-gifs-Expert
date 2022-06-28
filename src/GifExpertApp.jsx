import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        // setCategories([...categories,'d']);
        setCategories([newCategory, ...categories]);// para que la ultima categoria insertada se muestre a iicio se pone asi
        // setCategories(cat=>[...cat,'d']);
    }

    return (
        <>
            {/* Titulo  */}
            <h1>GifExpertApp</h1>

            {/* input  */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={(value)=>onAddCategory(value)}
            />

            {/* Listado d gif  */}

           
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
                
            }
        

            {/* gifItem  */}
        </>

    );
}
