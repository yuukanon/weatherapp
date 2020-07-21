import React from 'react';
import Moment from 'react-moment';


const Day = (props) => {
  return(
  <>
    <img src= {`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt=""/>
    <div> 
      <Moment format="MMMM DD">{props.dt_txt}</Moment></div>
    <div>Temprature: {props.main.temp.toFixed(0)}F</div>
    <div>Feels Like: {props.main.feels_like.toFixed(0)}F</div>
    <div>Humidity: {props.main.humidity}%</div>
  </>
  )
}

export default Day