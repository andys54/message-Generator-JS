import Track from "./Track";

function SearchResults(props) {
    // const removeTrack = (trackIdToRemove) => {
    //     setTracks((tracks) => tracks.filter((track) => track.id !== trackIdToRemove))
    // }

    const handleAddClick = (idToAdd) => {
        if(!(props.tracksToAdd.includes(props.tracks.find((track) => track.id === idToAdd)))){
            props.setTracksToAdd((prevTracks) => [props.tracks.find((track) => track.id === idToAdd), ...prevTracks]);
        }
    }

    return (
        <div>
            <div className="bold">Results</div>
            <ul>
                {props.tracks.map((track) => 
                <div className="track-container" >
                    <Track track={track} key={track.id} />
                    <button onClick={() => handleAddClick(track.id)} type="button" class="btn btn-light" id="add-button">+</button>
                </div>
                )}
            </ul>
        </div>
    )
}

export default SearchResults;