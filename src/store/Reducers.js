import C from "../Utils/Constants";
import { combineReducers } from "redux";

const rating = (state = 3, action) => C.SELECT_RATING == action.type ? parseFloat(action.payload) : state;

const ratingLimit = (state = 10, action) =>  state;

const genres = (state = [], action) => C.LOAD_GENRES === action.type ? action.payload : state;

const movies = (state = [], action) => C.LOAD_MOVIES === action.type ? [...state, ...action.payload] : state;

const page = (state = 1, action) => C.CHANGE_PAGE === action.type ? action.payload : state;

export default combineReducers({
    filters: combineReducers({
        rating,
        ratingLimit
    }),
    genres,
    movies,
    page
});