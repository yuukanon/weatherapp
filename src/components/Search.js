import React, { useState } from 'react';



// class Search extends Component {
//   state = {
//     text: '',

//   }

  const Search = ({onSearch}) => {
    const [text, setText] = useState('')
  

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text)
  }

  // render() {
  //   console.log(this.state)
    return (
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={handleChange}/>
        <input type="submit" value="Search" />
      </form>
    )
}

export default Search;