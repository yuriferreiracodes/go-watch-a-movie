import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Movie = () => {
    const [movie, setMovie] = useState({});

    let { id } = useParams();

    useEffect(() =>  {
        let myMovie = {
            id: 1,
            title: "Highlander",
            release_date: "1986-03-07",
            runtime: 116,
            mpaa_rating: "R",
            description: "A Scottish warrior learns he cannot die after a battle wound. Many years later in New York, he must fight others like him until only one remains.",
        }
        setMovie(myMovie);
    }, [id])

    return(
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, Rated: {movie.mpaa_rating}</em></small>
            <hr />
            <p>{movie.description}</p>
        </div>
    )
}

export default Movie;