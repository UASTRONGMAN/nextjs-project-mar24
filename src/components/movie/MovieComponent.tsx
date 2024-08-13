import React, {FC} from 'react';
import {IMovieModel} from "@/models/IMovieModel";
import {urls} from "@/constants/urls";

interface IProps{
    movie: IMovieModel;
}

const MovieComponent:FC<IProps> = ({movie}) => {
    return (
        <div>
            <img src={urls.image.base+movie.backdrop_path} alt="Movie poster"/>
            {movie.vote_average}
            {movie.title}
        </div>
    );
};

export default MovieComponent;