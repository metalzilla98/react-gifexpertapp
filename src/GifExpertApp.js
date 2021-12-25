import { useState } from 'react';
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

 export const GifExpertApp = () => {
  
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"]
  
  const [categories, setCategories] =  useState(["One Punch"]);


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />

        <hr/>        
        <ol>
            { 
                categories.map( (item) => {
                    return <GifGrid 
                                key={ item }
                                category={ item }
                            />
                })
            }
        </ol> 
    </>
  );
}


