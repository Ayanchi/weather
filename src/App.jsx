import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Header from './Header'
import axios from 'axios'




const api = {
  key: '51bdc8ed39ada837dff98ec2fa3a6b32',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App(props) {
  

  const [weather, setWeather] = useState([])
  const [city, setCeety] = useState('')


  async function getWeather(){
    let responce = await fetch(`${api.base}forecast?q=${city}&units=metric&appid=${api.key}`)
    let data = await responce.json()  
    const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
    setWeather({days: dailyData, city: data?.city?.name})
  }

  function setCity(e) {
    setCeety(e.target.value)
  }

  useEffect(() => {

  }, [setWeather])

  function formatCards(days = []) {
    return <Header days = {days}/>
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
      <div className="revue">
        <div className="city">
          {weather?.city}
        </div>
        <div className="degree">
        </div>
      </div>
      {formatCards(weather.days)}
    </div>
  )
}

export default App
