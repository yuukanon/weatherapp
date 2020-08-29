import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import key from './key';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      isloaded: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }
  
  fetchData = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`)
        .then(res => res.json())
        .then(data => this.setState({ 
          data, 
          isloaded: true,
        })
       )
    }, () => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Budapest&units=imperial&appid=${key}`)
        .then(res => res.json())
        .then(data => this.setState({
          data,
          isloaded: true,
        }))
    })
  }
  
  onSearch = (text) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=imperial&appid=${key}`)
      .then(res => res.json())
      .then(data => {this.setState({ 
        data, 
      })
    })
  }

  render() {
  // console.log(this.state)
    const { data, isloaded } = this.state;
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' render= {() => isloaded && <Home data={data} onSearch={this.onSearch}cityName={data.city.name} />}/>
          <Route path='/contact' component={Contact} />
        </Switch>
      </>
    );
  }
}

export default App;
