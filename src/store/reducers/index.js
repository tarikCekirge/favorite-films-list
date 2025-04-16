import { movies } from "../../data";

import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
} from "../actions";

const initialState = {
  movies: movies,
  favorites: [],
  currentIndex: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
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

    default:
      return state;
  }
}
