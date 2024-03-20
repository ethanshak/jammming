import React, { useEffect } from 'react';

function Track (props) {
    const addTrack = ((e) => {
        props.onAdd(props.track)
    }, [props.onAdd, props.track]);

    const removeTrack = (
        (e) => {
            props.onRemove(props.track)
        },
        [props.onRemove, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className='Track-Action' onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className='Track-Action' onClick={addTrack}>
                +
            </button>
        );

    };

    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;