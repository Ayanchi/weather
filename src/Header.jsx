import { useState, useEffect } from 'react'
import './Header.css'
import React from 'react'


function Header(props){

  /*formatCards = () => {
    return this.state.days.map(day, index)
  }*/

  /* const currentDate = new Date().toLocaleString("en", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
  const curentDay = new Date().toLocaleString("en", {
    weekday: 'long'
  })*/
  

  const ms = props.day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
  return(
    <div className='allWeeks'>

      <div className="week">
        <div className="day">
          {weekdayName}
        </div>
        <div className="degreeDay">
          {props.day?.main?.temp}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {}
        </div>
        <div className="degreeDay">
          {}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {}
        </div>
        <div className="degreeDay">
          {}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {}
        </div>
        <div className="degreeDay">
          {}
        </div>
      </div>
      <div className="week">
        <div className="day">
          {}
        </div>
        <div className="degreeDay">
          {}
        </div>
      </div>
    </div>
  )
}

export default Header
