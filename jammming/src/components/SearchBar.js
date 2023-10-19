import React, { useState } from "react";
import tracks from "../Tracks";

function SearchBar(props) {
    const [search, setSearch] = useState("");

    const handleChange = ({ target }) => {
        setSearch(target.value);
    };

    const handleSearch = (track) => {
        props.setTracks((prevTracks) => [track, ...prevTracks]);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.setTracks([]);
        if (search !== ""){
            const results = tracks.filter(track => track.title.toLowerCase().includes(search.toLowerCase()) || track.artist.toLowerCase().includes(search.toLowerCase()) || track.album.toLowerCase().includes(search.toLowerCase()));
            if (results.length !== 0){
                results.forEach((result)=> handleSearch(result));
            }
        } else {
            alert("Ooops!\nLooks like you didn't type anything in!");
        }
        setSearch("");
    };


    return (
            <form onSubmit={handleSubmit} style={{display: "inline-block", margin: "auto"}} >
                <input 
                id="searchBar" 
                type="text" value={search} 
                onChange={handleChange} 
                placeholder="Search for an Artist or a Song" /> 
            </form>
    )
};

export default SearchBar;