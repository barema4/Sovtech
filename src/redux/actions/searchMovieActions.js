import axios from "axios";
import {
  retrieveWarsInit,
  retrieveWarsSuccess,
  retrieveWarsError,
  retrieveWarInit,
  retrieveWarSuccess,
  retrieveWarError,
} from "./actionCreators/moviesActionCreators";

const url = "https://swapi.dev/api/films";

export const getWars = (params) => async (dispatch) => {
  dispatch(retrieveWarsInit());
  try {
    let response = await axios.get(`${url}/?search=${params}`);
    dispatch(retrieveWarsSuccess(response.data.results));
  } catch (error) {
    dispatch(retrieveWarsError(error));
  }
};

//

export const getWar = (id) => async (dispatch) => {
  dispatch(retrieveWarInit());
  try {
    let response = await axios.get(`${url}/${id}`);
    dispatch(retrieveWarSuccess(response.data));
  } catch (error) {
    dispatch(retrieveWarError(error));
  }
};
