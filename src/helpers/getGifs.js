export const getGifs = async ( category ) =>{
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=Q3SdF3YZ4GD82fnrtDIiE2Ciquuz42dg&q=${ encodeURI( category )}&limit=10`
    const resp = await fetch(url);
    
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

} 