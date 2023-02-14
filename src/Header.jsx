import './Header.css'
import React from 'react'


function Header(props){
  console.log(props.days)
  const Weekend = props?.days?.map((element, index) => {

    const ms = element.dt * 1000
    const weekdayName = new Date(ms).toLocaleString('en', { weekday: 'long' })

    return (
      <div className="week" key={index}>
        <div className="day">
          {weekdayName}
        </div>
        <div className="degreeDay">
          {element?.main?.temp}
        </div>
      </div>
    )
  })

  return(
    <div className='allWeeks'>
      {Weekend}
    </div>
  )
}

export default Header
