import React from 'react';
import {getAllMovies} from "@/services/api.services";
import MoviesComponent from "@/components/movies/MoviesComponent";

const MoviesPage = async () => {

    const {results} = await getAllMovies();


    return (
        <div>
            <MoviesComponent movies={results}/>
        </div>
    );
};

export default MoviesPage;