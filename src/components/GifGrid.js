import React, { useState, useEffect } from 'react'

export const GifGrid =  ({ category }) => {

    const getGifs = async () =>{
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=Q3SdF3YZ4GD82fnrtDIiE2Ciquuz42dg&q=Rick+and+Morty&limit=10'
        const resp = await fetch(url);
        
        const { data } = await resp.json();
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);

    } 

        
        
    const [count, setCount] = useState(0);
     useEffect( () => {
         getGifs();
     }, [])


    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={ () => setCount(count + 1 )}> </button>
        </div>
    )
}
