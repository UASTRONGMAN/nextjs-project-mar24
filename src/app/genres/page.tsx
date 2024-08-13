import React from 'react';
import {getAllGenres} from "@/services/api.services";
import GenresComponent from "@/components/genres/GenresComponent";

const GenresPage = async () => {

    const {genres} = await getAllGenres();

    return (
        <div>
            <GenresComponent genres={genres}/>
        </div>
    );
};

export default GenresPage;