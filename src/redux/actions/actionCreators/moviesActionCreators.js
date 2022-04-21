import { RETRIEVE_WAR, RETRIEVE_MOVIES } from "../actionTypes";

export const retrieveWarsInit = () => ({
  type: RETRIEVE_MOVIES.INIT,
});

export const retrieveWarsSuccess = (payload) => ({
  type: RETRIEVE_MOVIES.SUCCESS,
  payload,
});

export const retrieveWarsError = (error) => ({
  type: RETRIEVE_MOVIES.ERROR,
  error,
});

export const retrieveWarInit = () => ({
  type: RETRIEVE_WAR.INIT,
});

export const retrieveWarSuccess = (payload) => ({
  type: RETRIEVE_WAR.SUCCESS,
  payload,
});

export const retrieveWarError = (error) => ({
  type: RETRIEVE_WAR.ERROR,
  error,
});
