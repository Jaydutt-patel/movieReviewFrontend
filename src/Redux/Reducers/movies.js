import {
  GET_MOVIES,
  GET_MOVIE_BY_ID
} from "../Actions/types";

const initialState = [];

function movieReducer(movies = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case GET_MOVIES:
      return payload;

    case GET_MOVIE_BY_ID:
      return payload;
    default:
      return movies;
  }
};

export default movieReducer;