import React, {FC} from 'react';
import {IGenreModel} from "@/models/IGenreModel";
import GenreComponent from "@/components/genre/GenreComponent";

interface IProps{
    genres: IGenreModel[];
}

const GenresComponent:FC<IProps> = ({genres}) => {
    return (
        <div>
            {
                genres.map(genre => <GenreComponent genre={genre} key={genre.id}/>)
            }
        </div>
    );
};

export default GenresComponent;