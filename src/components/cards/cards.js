
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
        <div className="cards">
            {loading ? 'loading' : <div>
                <h2>{weather?.data.name},{weather?.data.sys.country}</h2>
                <div className="main-card">
                    <p>{Math.round(weather?.data.main.temp)} C</p>
                    <img src={`http://openweathermap.org/img/wn/${weather?.data.weather[0].icon}@2x.png`} alt='/' />
                    <div className="main-info">
                        <p>{weather?.data.weather[0].description}</p>
                        <p>{weekday}</p>
                    </div>
                </div>
                <div className="other-cards">
                    <div className="other">
                        <p>thu</p>
                        <p>svg</p>
                        <p>17C</p>
                    </div>
                    <div className="other">
                        <p>thu</p>
                        <p>svg</p>
                        <p>17C</p>
                    </div>
                    <div className="other">
                        <p>thu</p>
                        <p>svg</p>
                        <p>17C</p>
                    </div>
                    <div className="other">
                        <p>thu</p>
                        <p>svg</p>
                        <p>17C</p>
                    </div>
                    <div className="other">
                        <p>thu</p>
                        <p>svg</p>
                        <p>17C</p>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Cards
