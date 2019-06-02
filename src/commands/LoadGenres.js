import C from "../Utils/Constants";

export default async () => {

    const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=188e5435c4a0f495ba80393cb07f9ef7&language=en");
    const data = (await response.json()).genres;

    let output = {};

    for (let i = 0; i < data.length; i++) {
       
        output[data[i].id] = data[i].name;
    }

    return {
        type: C.LOAD_GENRES,
        payload: output
    };
};