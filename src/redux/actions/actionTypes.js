import defineAction from "./utils";

export const RETRIEVE_WARS = defineAction("RETRIEVE_WARS", [
  "INIT",
  "SUCCESS",
  "ERROR",
]);

export const RETRIEVE_WAR = defineAction("RETRIEVE_WAR", [
  "INIT",
  "SUCCESS",
  "ERROR",
]);
