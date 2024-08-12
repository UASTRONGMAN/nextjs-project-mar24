import React from 'react';
import {getAllMovies} from "@/services/api.services";

const MoviesPage = () => {

    const getMovies = getAllMovies().then(value => value.results);

    return (
        <div>
            {
                getMovies.then(value => value.map(movie => <div>{movie.title}</div>))
            }
        </div>
    );
};

export default MoviesPage;