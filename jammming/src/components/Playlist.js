import { useState } from "react";
import Track from "./Track";


function Playlist(props) {
    const [playlistName, setPlaylistName] = useState("");

    const removeTrack = (trackIdToRemove) => {
        props.setTracksToAdd(props.tracksToAdd.filter(track => track.id !== trackIdToRemove));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = ({ target }) => {
        setPlaylistName(target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={playlistName} onChange={handleChange} type="text" placeholder="Name your playlist" />
            </form>
            <ul>
                {props.tracksToAdd.map((track) => 
                    <div className="track-container">
                        <Track track={track} key={track.id} />
                        <button onClick={() => removeTrack(track.id)} type="button" class="btn btn-light" >-</button>
                    </div>
                    )
                }
            </ul>
        </div>
    )
}

export default Playlist;