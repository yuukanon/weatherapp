import React from 'react';


const CurrentWeather = (props) => {
  // console.log("from CurrentWeather", props);

  const currTemp = (props.data.list[0].main.temp.toFixed(0))
  const feelsLike = (props.data.list[0].main.feels_like.toFixed(0))

  // const tempInC = currTemp.toFixed() / 2;
  // const feelsLikeInC = feelsLike.toFixed() / 2;
    return (
        <>
            <div>Current temperature: {currTemp}F</div>
            <div>Feels like: {feelsLike}F</div>
            <div>Humidity: {props.data.list[0].main.humidity}%</div>
        </>
  )
}

export default CurrentWeather;