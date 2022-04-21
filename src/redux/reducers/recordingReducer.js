import { RETRIEVE_WARS, RETRIEVE_WAR } from "../actions/actionTypes";

const initialState = {
  wars: [],
  war: null,
  error: null,
  loading: false,
};

const recordingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_WARS.INIT:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_WARS.SUCCESS:
      return {
        ...state,
        loading: false,
        wars: action.payload,
      };

    case RETRIEVE_WARS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RETRIEVE_WAR.INIT:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_WAR.SUCCESS:
      return {
        ...state,
        loading: false,
        war: action.payload,
      };

    case RETRIEVE_WAR.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return initialState;
  }
};

export default recordingReducer;
