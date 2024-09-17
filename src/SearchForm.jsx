import React, { useState } from 'react'

function SearchForm({ search }) {
    const [ term,setTerm ] = useState("")
    const handleChange = (evt)=>{
        setTerm(evt.target.value)
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        search(term)
        setTerm("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={handleChange} required /> &nbsp;
        <button>Search</button>
    </form>
  )
}

export default SearchForm