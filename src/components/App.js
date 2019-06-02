import React, { useEffect } from "react";
import Filter from './FilterContainer';
import Movies from "./MoviesContainer";
import Pager from "./PagerContainer";

const App = () => {

    return (
        <>
            <Filter />
            <Movies />
            <Pager />
        </>
    )
};

export default App;