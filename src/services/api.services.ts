import {baseURL, urls} from "@/constants/urls";
import {IPaginationModel} from "@/models/IPaginationModel";
import {IGenreModel} from "@/models/IGenreModel";
import {token} from "@/constants/token";
import {IGenreResponceModel} from "@/models/IGenreResponceModel";

const getAllMovies = async ():Promise<IPaginationModel> => {
    return await fetch(baseURL+urls.movies.base, {
        method: 'GET',
        headers:{
            Authorization: token
        }})
        .then(value => value.json())
}

const getAllGenres = async ():Promise<IGenreResponceModel> => {
    return await fetch(baseURL+urls.genres.base, {
        method: 'GET',
        headers:{
            Authorization: token
        }})
        .then(value => value.json())
}

export {
    getAllMovies,
    getAllGenres
}