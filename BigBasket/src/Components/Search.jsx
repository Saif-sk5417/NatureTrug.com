import React, { useState } from 'react'
import "../Styles/Navbar.css"


const Search = ({name,handelFilter}) => {
    const [term,setTerm]=useState("")
    console.log(term)
    const submitHandler = (e)=>
    {
        e.preventDefault();
        
        
    }
  return (
    <div id="search">
        <input id="input" type="text" value={term} onChange={(e)=>setTerm(handelFilter(e))}  placeholder="Search by name..." />
        <img id="searchlogo" src="search.png" alt="" onClick={submitHandler}/>
    </div>
  )
}

export default Search;