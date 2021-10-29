import axios from "axios";

const api_key = 'be52520c8bd574df462146e323c51f61';

export async function getMovies() {
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular'

    let movies = [];
    const response = await axios.get(baseUrl, {
        params: {
            api_key: api_key
        }
    });

    movies = response.data;
    return movies
}

export async function getPopularMovies() {
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular';

    let popularMovies = [];
    const response = await axios.get(baseUrl, {
        params: {
            api_key: api_key
        }
    });

    popularMovies = response.data;
    return popularMovies;
}