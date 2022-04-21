import { RETRIEVE_WAR, RETRIEVE_WARS } from "../actionTypes";

export const retrieveWarsInit = () => ({
  type: RETRIEVE_WARS.INIT,
});

export const retrieveWarsSuccess = (payload) => ({
  type: RETRIEVE_WARS.SUCCESS,
  payload,
});

export const retrieveWarsError = (error) => ({
  type: RETRIEVE_WARS.ERROR,
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
