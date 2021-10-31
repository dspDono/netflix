import { defineStore } from "pinia";
import { getMovies, getGenres, getPopularMovies } from "@/services/movieService";

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: [],
        genres: [],
        image: ''
    }),
    getters: {
        getImageMovie(state) {
            return state.image;
        }
    },
    actions: {
        async setMovies() {
            await getMovies().then((res) => {
                this.movies = res;
            }).catch((err) => {
                console.log(err)
            })
        },
        async setGenres() {
            await getGenres().then((res) => {
                this.genres = res;
            }).catch((err) => {
                console.log(err);
            })
        },
        async setGenreMovie(id: string, genre: any) {
            await getMovies(id).then((res) => {
                this.movies = res;
                if (genre.active === undefined) {
                    this.genres.forEach((g) => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        delete g.active
                    })
                    genre.active = true;
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        async setPopularMovies() {
            await getPopularMovies().then((res) => {
                this.movies = res.popularMovies;
                this.image = res.image
            }).catch((err) => {
                console.log(err)
            })
        },
    }
})