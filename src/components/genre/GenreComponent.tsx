import React, {FC} from 'react';
import {IGenreModel} from "@/models/IGenreModel";

interface IProps{
    genre: IGenreModel
}

const GenreComponent:FC<IProps> = ({genre}) => {
    return (
        <div>
            {genre.name}
        </div>
    );
};

export default GenreComponent;