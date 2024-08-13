import React from 'react';
import {getAllGenres} from "@/services/api.services";

const GenresPage = async () => {

    const {genres} = await getAllGenres();

    return (
        <div>

            {
                genres.map(genre => <div key={genre.id}>{genre.name}</div>)
            }
        </div>
    );
};

export default GenresPage;