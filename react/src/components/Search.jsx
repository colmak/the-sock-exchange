import React, { useState } from 'react';

const Search = (props) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(query);
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export default Search;
