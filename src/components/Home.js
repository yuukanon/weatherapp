import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import Search from './Search';


const Home = (props) => {
  // console.log(props)
  return (
    <>
      <Search onSearch={props.onSearch}/>
      <Title cityName={props.cityName} />
      <CurrentWeather data={props.data} />
    </>
  )
}

export default Home;
