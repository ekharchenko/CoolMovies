import C from "../Utils/Constants";
import loadGenresCommand from './LoadGenres';

export default async (store, page) => {

    if (store.getState().genres.length === 0) {
        store.dispatch(await loadGenresCommand());
    }
    
    let genres = store.getState().genres;

    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=188e5435c4a0f495ba80393cb07f9ef7&language=en-US&page=${page}&region=GB`);
    const json = await response.json();

    const movies = json.results.map(data => {
        return {
            ...data, "genres": data.genre_ids.map(el => genres[el])
        };
    });

    return {
        "type": C.LOAD_MOVIES, "payload": movies
    };
};