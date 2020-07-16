import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';


const Home = (props) => {
  // console.log(props)
  return (
    <>
      <Title cityName={props.cityName} />
      <CurrentWeather data={props.data} />
    </>
  )
}

export default Home;
