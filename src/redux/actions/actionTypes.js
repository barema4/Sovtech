import defineAction from "./utils";

export const RETRIEVE_MOVIES = defineAction("RETRIEVE_MOVIES", [
  "INIT",
  "SUCCESS",
  "ERROR",
]);

export const RETRIEVE_WAR = defineAction("RETRIEVE_WAR", [
  "INIT",
  "SUCCESS",
  "ERROR",
]);
