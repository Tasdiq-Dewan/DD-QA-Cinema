import axios from "axios";
import { useEffect, useState } from "react";
import './Upcoming.css'
const GetFilms = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/api/getUpcomingFilms`).then(result => {
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
                    <p>Release Date: {film.ReleaseDate}</p>
                    <img clasName="movie-img" src={film.Poster} alt=""/>
                    </li>
                </div>
            ))
            }
            </ul></h1>
        </>
    );
}


export default GetFilms