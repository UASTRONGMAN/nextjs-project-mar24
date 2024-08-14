import React, {FC} from 'react';
import {IMovieModel} from "@/models/IMovieModel";
import {urls} from "@/constants/urls";
import css from './movie.module.css'
import PaginationComponent from "@/components/pagination/PaginationComponent";
import {useSearchParams} from "next/navigation";

interface IProps{
    movie: IMovieModel;
}

const MovieComponent:FC<IProps> = ({movie}) => {

    return (
        <div className={css.movieStyles}>
            <img src={urls.image.base+movie.backdrop_path} alt="Movie poster"/>
            {movie.title}
            <PaginationComponent page={}/>
        </div>
    );
};

export default MovieComponent;