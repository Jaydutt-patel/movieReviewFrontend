import {
  GET_MOVIES,
  GET_MOVIE_BY_ID,
} from "./types";

import MovieService from "../../Services/service";

export const retrieveMovie = () => async (dispatch) => {
  try {
    const res = await MovieService.getAll();

    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveMovieById = (id) => async (dispatch) => {
  try {
    const res = await MovieService.get(id);

    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};