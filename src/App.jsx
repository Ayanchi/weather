import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Header from './Header'



const api = {
  key: '51bdc8ed39ada837dff98ec2fa3a6b32',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App(props) {

  let state =  {
    days: []
  }
  const [weather, setWeather] = useState([])

  let city = ''


  async function getWeather(){
    let responce = await fetch(`${api.base}forecast?q=${city}&units=metric&appid=${api.key}`)
    let data = await responce.json()  
    const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
    setWeather({days: dailyData})
    console.log(dailyData)
    console.log(data)
  }

  function setCity(e) {
    city = e.target.value
  }

  useEffect(() => {

  }, [setWeather])

  function formatCards() {
    return state.days.map((day, index) => <Header day={day} key={index}/>)
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
          {props.weather?.main?.temp}
        </div>
        <div className="degree">
        </div>
      </div>
      {formatCards()}
    </div>
  )
}

export default App
