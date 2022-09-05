import React from 'react'
import { useEffect, useState } from 'react'

    
function SearchBar(){
    const [data, setData] = useState([])

    useEffect=(() => {
    
        const fetchData = async () => {
            const result = await fetch("http://localhost:8081/api/getAllFilms")
            const jsonResult = await result.json()

            const data1 = setData(jsonResult)
    } 
        fetchData()
    }, []);

    const [filteredData, setFilteredData] = useState([])
    
    const handleFilter = (e) => {
        const searchWord = e.target.value;
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
       
        <input type='text' className= 'search-input' onChange={handleFilter} />
        <div className='search-icon'></div>
   

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
export default SearchBar;
