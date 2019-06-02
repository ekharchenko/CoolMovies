import React from "react";

const Movie = ({ title, poster_path, genres }) => {
    return (
        <div className="movie">
            <img src={"https://image.tmdb.org/t/p/w500" + poster_path} />
            <div className="text"> 
                <h3>{title}</h3>
                <p>{genres.join(", ")}</p>
            </div>
        </div>
    );
};

export default Movie;