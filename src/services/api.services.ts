import {baseURL, urls} from "@/constants/urls";
import {IPaginationModel} from "@/models/IPaginationModel";

const getAllMovies = async ():Promise<IPaginationModel> => {
    return await fetch(baseURL+urls.movies.base, {headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mzc1OWMxNzMzNGYyYmRjMjMyMTkzMjM3YTI0OWZmYiIsInN1YiI6IjY2NzFlMmViMjIwN2Y1NmVhYzgzZGFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_R-BkIhPStN4unxLMWObmsSAoEft22IEAk6PG9Dr8s'
        }})
        .then(value => value.json())
}

export {
    getAllMovies
}