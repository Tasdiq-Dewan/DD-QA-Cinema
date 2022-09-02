import axios from "axios";
import { useEffect, useState } from "react"

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
                <li key={film.id}><h1>{film.Title}</h1>
                <p>Runtime: {film.Runtime}</p>
                <p>Synopsis: {film.Synopsis}</p>
                <p>Classification: {film.Classification}</p>
                <h2><img src={film.Poster}></img></h2>
                </li>
            ))
            }
            </ul></h1>
        </>


    );
}

const SearchFilm = () =>{
    const [film, setFilm] = useState([]);
    const [search, setSearch] = useState("");

    const searchTerms = (e) =>{
        setSearch(e.target.value);
    }

    const searchFilm =(e) => {
        axios.get("http://localhost:8081/api/searchByTerm/" + search).then(result =>{
            setFilm(result.data);
            console.log(result.data);
        })
    }
    
    return(
        <>
        <input type="text" onChange={e => searchTerms(e)} ></input>
        <button onClick={e => searchFilm(e)}>onClick</button>

        <h1><ul>
            {
            film.map(film =>(
                <li key={film.id}><h1>{film.Title}</h1>
                <p>Runtime: {film.Runtime}</p>
                <p>Synopsis: {film.Synopsis}</p>
                <p>Classification: {film.Classification}</p>
                <h2><img src={film.Poster}></img></h2>
                </li>
            ))
            }
            </ul></h1>
        </>
    );
}


export default SearchFilm;
