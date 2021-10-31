import axios from "axios";

const api_key = 'be52520c8bd574df462146e323c51f61';
const imgUrl = 'https://image.tmdb.org/t/p/original/';

export async function getMovies(id?: string) {
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie'

    const response = await axios.get(baseUrl, {
        params: {
            api_key: api_key,
            with_genres: id
        }
    });

    const movies = response.data.results;
    return movies;
}

export async function getGenres() {
    const baseUrl = 'https://api.themoviedb.org/3/genre/movie/list';

    const response = await axios.get(baseUrl, {
        params: {
            api_key: api_key,
        }
    });
    const genre = response.data.genres;
    return genre;
}

export async function getPopularMovies() {
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular';

    const response = await axios.get(baseUrl, {
        params: {
            api_key: api_key,
        }
    });
    const popularMovies = response.data.results.splice(0, 3);
    const image = imgUrl + response.data.results[Math.floor(Math.random() * response.data.results.length)].poster_path;

    return { popularMovies, image };
}