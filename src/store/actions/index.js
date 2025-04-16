export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE";
export const SET_CURRENT_INDEX = "SET_CURRENT_INDEX";

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});

export const nextMovie = () => ({
  type: NEXT_MOVIE,
});

export const previousMovie = () => ({
  type: PREVIOUS_MOVIE,
});

export const setCurrentIndex = (index) => ({
  type: "SET_CURRENT_INDEX",
  payload: index,
});
