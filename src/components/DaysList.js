import React, { useState, useEffect } from 'react'
import Day from './Day';

const DaysList = (props) => {
  console.log(props.data.data.list)
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => 
    setData(), [props])

  const setData = () => {
    setDailyData(
      props.data.data.list.filter(data => 
        data.dt_txt.includes('15:00:00'))
    )
  }
  return (
    <div><h3>5 Day Forecast</h3>
      { dailyData.map(day => <Day {...day} key={day.dt_txt}/>)}
    </div>
  )
  }


export default DaysList;
