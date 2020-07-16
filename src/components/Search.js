import React, { Component } from 'react';


class Search extends Component {
  state = {
    text: '',

  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.text)
  }

  render() {
    console.log(this.state)
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input type="text" name="" id="" onChange={this.handleChange}/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default Search;