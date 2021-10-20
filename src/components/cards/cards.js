
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather } from '../../store/weatherSlice';
import "./cards.css"
function Cards() {
    const state = useSelector(state => state);
    const { weather, loading, error } = state;
    console.log(weather)
    const dispatch = useDispatch();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]


    useEffect(() => {
        dispatch(getWeather())
    }, [dispatch])


    return (
        <div>
            {loading ? 'loading' : <div className="cards">
                <h2>{weather?.data.name},{weather?.data.sys.country}</h2>
                <div className="main-card">
                    <div className="main-info">
                        <p>{Math.round(weather?.data.main.temp)} &#176;C</p>
                        <p>{weather?.data.weather[0].description}</p>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${weather?.data.weather[0].icon}@2x.png`} alt='/' />
                    <p>{weekday}</p>
                </div>
            </div>}

        </div>
    )
}

export default Cards
