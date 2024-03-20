import React, { useState, useEffect } from 'react';

function SearchBar (props) {
    const [term, setTerm] = useState('');

    const handleTermChange = useEffect((e) => {
        setTerm(e.target.value)
    }, []);

    const search = useEffect(() => {
        props.onSearch(term)
    }, [props.onSearch, term]);

    return (
        <div className='SearchBar'>
            <input placeholder='Enter A Song Title' onChange={handleTermChange}/>
            <button className='SearchButton' onClick={search}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;