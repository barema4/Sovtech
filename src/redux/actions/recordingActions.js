import axios from "axios";
import {
  retrieveWarsInit,
  retrieveWarsSuccess,
  retrieveWarsError,
  retrieveWarInit,
  retrieveWarSuccess,
  retrieveWarError,
} from "./actionCreators/recordingActionCreators";

const url = "https://swapi.dev/api/films";
// process.env.NODE_ENV === "production"
//   ? `https://wizrconnect.com/api`
//   : `${process.env.REACT_APP_BASE_URL}/api`;

export const getWars = (params) => async (dispatch) => {
  dispatch(retrieveWarsInit());
  try {
    let response = await axios.get(`${url}/?search=${params}`);
    dispatch(retrieveWarsSuccess(response.data.results));
  } catch (error) {
    dispatch(retrieveWarsError(error));
  }
};

export const getwar = (id) => async (dispatch) => {
  dispatch(retrieveWarInit());
  try {
    let response = await axios.get(`${url}/video/${id}`);
    dispatch(retrieveWarSuccess(response.data.video));
  } catch (error) {
    dispatch(retrieveWarError(error));
  }
};
