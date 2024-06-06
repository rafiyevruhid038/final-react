import React, { useState } from 'react'
import './searchbar.css'

const SearchBar = ({onSearch}) => {
  const[inputValue,setInputValue] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSearch(inputValue)

  };
    return (
    <form className='search-bar' onSubmit={handleSubmit}>
        <input type="text" placeholder="Write name of the game" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar