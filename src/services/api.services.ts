import {baseURL, urls} from "@/constants/urls";
import {IPaginationModel} from "@/models/IPaginationModel";
import {IGenresModel} from "@/models/IGenresModel";
import {token} from "@/constants/token";
import {IGenresResponceModel} from "@/models/IGenresResponceModel";

const getAllMovies = async ():Promise<IPaginationModel> => {
    return await fetch(baseURL+urls.movies.base, {
        method: 'GET',
        headers:{
            Authorization: token
        }})
        .then(value => value.json())
}

const getAllGenres = async ():Promise<IGenresResponceModel> => {
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