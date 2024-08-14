import React, {FC} from 'react';
import {IMovieModel} from "@/models/IMovieModel";
import MovieComponent from "@/components/movie/MovieComponent";
import css from './movies.module.css'

interface IProps{
    movies: IMovieModel[]
}

const MoviesComponent:FC<IProps> = ({movies}) => {
    return (
        <div className={css.moviesComponent}>
            {
                movies.map(movie => <MovieComponent movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export default MoviesComponent;