import React from 'react';


const CurrentWeather = (props) => {
  console.log(props.data)
  return (
    <>
      {/* <div>{props.data.list[0].main.temp - 273.15}</div> */}
      <div>Feels Like: </div>
      <div>Humidity: </div>
    </>
  )
}

export default CurrentWeather;