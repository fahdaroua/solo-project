import React,{useState}from 'react'
const Search = ({handleChange}) => {
   const [input,setInput] = useState("")
  
    return (
        <div className='searchForm'>
            <input type="text" placeholder="Movies Search..." className='search'  onChange={(event)=>setInput(event.target.value)}/>
            <button className='searchButton' onClick = {handleChange(input)}>&#x1F50E;</button>
        </div>
    )
}
export default Search