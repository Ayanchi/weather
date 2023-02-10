import { useState, useEffect } from 'react'
import './Header.css'
import React from 'react'


function Header(props){

  const [weekWeather, setWeekWeather]  = useState('')

  useEffect(() => {

  }, [setWeekWeather])

  async function getWeekWeather(){
    let resp = await fetch(`${api.base}forecast?q${props.city}&metric&APPID=${api.key}`)
    let data = await resp.json()
    const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
    setWeekWeather({days: dailyData})
    console.log(data)
  }

  const ms = props.day * 1000
  const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'})

  /*formatCards = () => {
    return this.state.days.map(day, index)
  }*/

  const currentDate = new Date().toLocaleString("en", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
  const curentDay = new Date().toLocaleString("en", {
    weekday: 'long'
  })
  
  return(
    <div className='allWeeks'>

      <div className="week">
        <div className="day">
          {curentDay}
        </div>
        <div className="degreeDay">
          {}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {getWeekWeather}
        </div>
        <div className="degreeDay">
          {curentDay}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {curentDay}
        </div>
        <div className="degreeDay">
          {props.weather?.main?.temp}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {curentDay}
        </div>
        <div className="degreeDay">
          {props.weather?.main?.temp}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {curentDay}
        </div>
        <div className="degreeDay">
          {props.weather?.main?.temp}
        </div>
      </div>
    </div>
  )
}

export default Header
