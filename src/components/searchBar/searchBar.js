import React from 'react'
import './searchBar.css'
function SearchBar() {
    return (
        <div className="search">
            <form className="search-form">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for City"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar

