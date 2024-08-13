import React from 'react';
import {getAllMovies} from "@/services/api.services";

const MoviesPage = async () => {

    const {results} = await getAllMovies();


    return (
        <div>
            {
                results.map(movie => <div>{movie.title}</div>)
            }
        </div>
    );
};

export default MoviesPage;