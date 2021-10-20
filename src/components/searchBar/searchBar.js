import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather } from '../../store/weatherSlice';
import './searchBar.css'
function SearchBar() {
    const[searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeather(searchValue))
    }

    return (
        <div className="search">
            <form className="search-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for City"
                    name="s"
                    onChange= {(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default SearchBar

