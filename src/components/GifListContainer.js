import React, { useEffect } from "react";
import { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer(){

    const [gifs , setGifs] = useState([]);
    const [query , setQuery] = useState("dolphins");

    useEffect(()=>{
        fetch (`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res=>res.json())
        .then(({data}) => {
            const gifs = data.map((gif) => ({url : gif.images.original.url}));
            setGifs(gifs);
        });
    }, [query]);
    return(
        <div>
            <GifList gifs={gifs}/>
            <GifSearch onSubmitQuery = {setQuery}/>
        </div>
    )
}

export default GifListContainer
