import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



const Weather = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')


    const url =  ` https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9d4765d2ccd79eb61a0fded2ab1c6606`

    const getLocation = (e) => {
            axios.get(url).then((response) => {
                e.preventDefault()
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')

    }

  return (
    <div className='bg-image'>
        <div className='top'>
           <div>
           <input type="text" className='input' 
            onChange={e => setLocation((e).target.value)}
            // onKeyPress={getLocation}   
            value={location}
            placeholder='Enter location...' />
           </div>
           <div className='div-search'>
           <button type='button' onClick={getLocation} className='search'><FontAwesomeIcon icon={faSearch} /></button>
           </div>
        </div>

        <div className='city'>
            <div className='town'>
            <p className='miam'>{data.name}</p>
            {data.main ?  <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className='cloud'>
            {data.weather[0].main === 'Clouds' ? <p>{data.weather[0].main} <FontAwesomeIcon icon={faCloud} /></p> : null}

            {data.weather[0].main === 'Clear' ? <p>{data.weather[0].main} <FontAwesomeIcon icon={faCloud} /></p> : null}

            {data.weather[0].main === 'Rain' ? <p>{data.weather[0].main} <FontAwesomeIcon icon={faCloudRain} /></p> : null}

            {data.weather[0].main === 'Smoke' ? <p>{data.weather[0].main} <FontAwesomeIcon  icon={faSnowflake} /></p> : null}
            </div>
        </div>

        {data.name != undefined && 

<div className='down'>
<div className='weat'>
    <p className='fahr'>{data.main.pressure}°F</p>
   <div className='flex'>
   <p className='fahrp'>Pressure</p>
    <FontAwesomeIcon icon={faWater} />
   </div>
</div>
<div className='weat'>
    <p className='fahr'>{data.main.humidity}%</p>
    <div className='flex'>
    <p className='fahrp'>Humidity</p>
    <FontAwesomeIcon icon={faDroplet} />
    </div>
</div>
<div className='weats'>
    <p className='fahr'>{data.wind.speed.toFixed()}MPH</p>
    <div className="flex">
    <p className='fahrp'>Winds</p> 
    <FontAwesomeIcon icon={faWind} />
    
    </div>
</div>
</div>
        }
       
      
    </div>
  )
}

export default Weather
