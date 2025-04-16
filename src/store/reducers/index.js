import { movies } from "../../data";

// action types
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
} from "../actions";

// initialState
const initialState = {
  currentIndex: 0,
  favMovies: [],
  movies: movies,
};

// Reducer
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };
    case REMOVE_FROM_FAVORITES:
      const removedMovie = state.favMovies.find(
        (movie) => movie.id === action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
        movies: [removedMovie, ...state.movies],
      };
    case NEXT_MOVIE:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case PREVIOUS_MOVIE:
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    case "SET_CURRENT_INDEX":
      return {
        ...state,
        currentIndex: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
