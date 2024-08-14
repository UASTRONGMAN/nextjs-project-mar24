import page from "@/app/genres/page";

const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: {
        base: '/discover/movie'
    },
    genres: {
        base: `/genre/movie/list`
    },
    image: {
        base: 'https://image.tmdb.org/t/p/w500'
    },
    page: {
        base: '/discover/movie?page='
    }
};


export {
    baseURL,
    urls
};