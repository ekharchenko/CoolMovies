import React, { useEffect } from "react";
import Movie from "./Movie";
import loadMoviesCommand from '../commands/LoadMovies';
import store from "../store/StoreFactory";


const Movies = ({ movies, rating, page }) => {

    useEffect(() => {

        (async () => {
            store.dispatch(await loadMoviesCommand(store, page));
        })();

    }, [page]);

    return (
        <div className="grid">
            {movies.
                filter(movie => movie.vote_average >= rating).
                sort((a, b) => b.popularity - a.popularity).
                map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
    );
};

export default Movies;