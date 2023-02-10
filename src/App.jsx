import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Header from './Header'


const api = {
  key: '51bdc8ed39ada837dff98ec2fa3a6b32',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App(props) {
  const [weather, setWeather] = useState('')

  let city = ''

  useEffect(() => {

  }, [setWeather])


  async function getWeather(){
    let responce = await fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    let data = await responce.json()  
    setWeather(data)
    
  }

  function setCity(e) {
    city = e.target.value
  }
  
  return (
    <div className="App">
      
      <div className="first">
        <div className="wether">ПОГОДА</div>
        <div className="placeWather"></div>
        <input placeholder="введите город"
          onChange={setCity} 
          type = 'text'/>
        <button onClick={getWeather}>запусти</button>
      </div>

      <div className='revue'>
        <div className="city">
          {weather?.name}
        </div>
        <div className="degree">
          {weather?.main?.temp}
        </div>
      </div>
      <Header city={city} weather={weather} setWeather={setWeather}/>
    </div>
  )
}

export default App
