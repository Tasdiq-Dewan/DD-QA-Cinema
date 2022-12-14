import axios from "axios";
import { useEffect, useState } from "react";
import './Searchbar.css'



const GetFilms = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/api/getAllFilms`).then(result => {
            setFilms(result.data);
            console.log(result.data);
        }).catch(err => {
            console.log(err);
        });
    }, []); 

    return (
    <>
        <h1><ul>
            {
            films.map(film =>(
                    <div className="upcoming">
                        <li key={film.id}><h3>{film.Title}</h3>
                        <p>Runtime: {film.Runtime}</p>
                        <p>Synopsis: {film.Synopsis}</p>
                        <p>Classification: {film.Classification}</p>
                        <h2><img  src={film.Poster}></img></h2>
                        </li>
                    </div>
            ))
            }
            </ul></h1>
        </>
    );
}

const SearchFilm = () =>{
    const [film, setFilm] = useState([]);


    const getFilm = async (e) => {
     if(e.target.value != 0){
        axios.get("http://localhost:8081/api/searchByTerm/" + e.target.value).then(result =>{
            setFilm(result.data);
            console.log(result.data);
        })
        }

    }


    return(
    

    <div className='search'>
       
     <input type="text" className = 'search-input' placeholder= "Enter Film..." onChange={e => getFilm(e)}></input>
       <div className='search-icon'></div>
         
          <div className='search-result'>

    
            {
            film.map(film =>(
            <div className="upcoming">
                
                <a key={film.id} href={film.Url} className = 'data-item' >
                    <div className = 'film-title'>
                <h4>{film.Title}</h4>
                <p>{film.Synopsis}<p>{film.Classification}</p></p>
                <img classname="search-img" src={film.Poster}></img>
                </div>
                </a>
            </div>
                
            ))
            }
      
          </div>
    </div>

    );
}


export {
    GetFilms,
    SearchFilm
}
