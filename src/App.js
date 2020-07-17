import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import key from './Key';


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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Lisbon&appid=${key}`)
    .then(res => res.json())
    .then(data => {this.setState({ 
      data, 
      isloaded: true,
     })
    })
  }
  
  onSearch = (text) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${key}`)
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
          <Route exact path='/' render= {() => isloaded && <Home data={data} cityName={data.city.name} />}/>
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
