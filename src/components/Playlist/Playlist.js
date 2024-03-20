import React, { useEffect } from 'react';

import TrackList from '../TrackList/TrackList';

function Playlist (props) {
    const handleNameChange = useEffect ((e) => {
        props.onNameChange(e.target.value);
    }, 
    [props.onNameChange]);

    return (
        <div className='Playlist'>
            <input onChange={handleNameChange} value={"New Playlist"} />
            <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
            <button className='Playlist-save' onClick={props.onSave}>
                Save To Spotify
            </button>
        </div>
    );
};

export default Playlist;