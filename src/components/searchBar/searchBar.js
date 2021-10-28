import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../../store/weatherSlice';
import './searchBar.css'
function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        !searchValue ? dispatch(getWeather()) : dispatch(getWeather(searchValue))
        setSearchValue('');
    }

    return (
        <div className="search">
            <form className="d-flex" onSubmit={onSubmit}>
                <input onChange={(e) => setSearchValue(e.target.value)}
                    variant="filled"
                    value={searchValue}
                    type="text"
                    placeholder="Search for City"
                    className="searchbar form-control me-2"
                    type="search"
                    aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar

