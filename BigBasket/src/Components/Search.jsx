import React, { useState } from 'react'
import "../Styles/Navbar.css"
import styles from "./ProductPage.module.css"

const Search = ({name,handelFilter}) => {
    const [term,setTerm]=useState("")
    console.log(term)
    const submitHandler = (e)=>
    {
        e.preventDefault();
        
        
    }
  return (
    <div>
    <p className={styles.FilterProduct_heading}>Search Here...</p>
    <div className={styles.FilterProduct_underLine}></div>
    <hr className={styles.FilterProduct_hr1}/>
    <div id="search">
        <input id="input" type="text" value={term} onChange={(e)=>setTerm(handelFilter(e))}  placeholder="Search by name..." />
        <img id="searchlogo" src="search.png" alt="" onClick={submitHandler}/>
    </div>
    </div>
  )
}

export default Search;