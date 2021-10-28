
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather } from '../../store/weatherSlice';
import "./cards.css"
function Cards() {
    const state = useSelector(state => state);
    const weather = useSelector(state => state.weather)
    const { loading } = state;
    console.log(weather)
    const dispatch = useDispatch();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

    const epochToDay = (dayEpoch) => {
        const d = new Date(dayEpoch).getUTCDay();

        switch (d) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            case 0:
                return "Sunday";
            default:
                break;
        }
    };
    const date1 = new Date(weather?.data.forecast.forecastday[1].date)
    const date2 = new Date(weather?.data.forecast.forecastday[2].date)


    useEffect(() => {
        dispatch(getWeather())
    }, [dispatch])


    return (
        <div>
            {loading ? <div className='loading'>Loading</div> : <div className="cards">
                <h2>{weather?.data.location.name},{weather?.data.location.country}</h2>
                <div className="main-card">
                    <div className='main-one'>
                        <p>{Math.ceil(weather?.data.current.temp_c)}&#176;C</p>
                        <img src={weather?.data.current.condition.icon} alt='/' width='90'/>
                    </div>
                    <div className='main-two'>
                        <p>{weather?.data.current.condition.text}</p>
                    </div>

                </div>
                <div className="other-cards">
                    <div className="other">
                        <p>{epochToDay(date1)}</p>
                        <img src={weather?.data.forecast.forecastday[1].day.condition.icon} alt='/' />
                        <p>{Math.ceil(weather?.data.forecast.forecastday[1].day.avgtemp_c)} &#176;C</p>
                    </div>
                    <div className="other">
                        <p>{epochToDay(date2)}</p>
                        <img src={weather?.data.forecast.forecastday[2].day.condition.icon} alt='/' />
                        <p>{Math.ceil(weather?.data.forecast.forecastday[2].day.avgtemp_c)} &#176;C</p>
                    </div>

                </div>
            </div>}

        </div>
    )
}

export default Cards
