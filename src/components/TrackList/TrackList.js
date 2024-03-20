import React from 'react';

function TrackList (props) {
    return (
        <div className='TrackList'>
            {props.track.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.add}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                )
            })}
        </div>
    );
};

export default TrackList;