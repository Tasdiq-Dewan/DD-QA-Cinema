import React from 'react'
import { useState } from 'react'
import './Searchbar.css'


function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (e) => {
       const searchWord = e.target.value
       const newFilter = data.filter((value) =>{
         if(
          value.title.toLowerCase().includes(searchWord.toLowerCase())
         )
         return value.title.toLowerCase().includes(searchWord.toLowerCase())
       })
       if(searchWord == "") {
        setFilteredData([])
       } else {
        setFilteredData(newFilter)
       }
    }

    return(
    <div className='search'>
       <div classname="search-input">
        <input type='text' placeholder={placeholder} onChange={handleFilter} />
        <div className='search-icon'></div>
       </div>

       { filteredData.slice(0,5).length != 0 && (

       <div className='search-result'>
            {filteredData.map((value, key) => {
                return <a className='data-item' href='bookingpage'> 
                <p>{value.title}</p>
                </a>
            })}
        </div>

       )}       
    </div>
    )

 
}

export default SearchBar